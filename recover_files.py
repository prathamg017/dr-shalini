import json
import os
import re

transcript_path = "/Users/apple/.gemini/antigravity-ide/brain/7f06b264-d026-4a20-8675-4c5c3f7851bf/.system_generated/logs/transcript_full.jsonl"
targets = [
    "/Users/apple/shalini doc/src/app/page.tsx",
    "/Users/apple/shalini doc/src/app/about/page.tsx",
    "/Users/apple/shalini doc/src/components/Header.tsx",
    "/Users/apple/shalini doc/src/components/Footer.tsx",
    "/Users/apple/shalini doc/src/components/MedicalDisclaimerBanner.tsx"
]

file_contents = {}

with open(transcript_path, "r") as f:
    for line in f:
        try:
            data = json.loads(line)
            if "tool_calls" in data:
                for tc in data["tool_calls"]:
                    if tc.get("function", {}).get("name") == "default_api:write_to_file":
                        args_str = tc.get("function", {}).get("arguments", "{}")
                        args = json.loads(args_str)
                        target_file = args.get("TargetFile")
                        if target_file in targets:
                            file_contents[target_file] = args.get("CodeContent")
        except:
            pass

for filepath, content in file_contents.items():
    if "components/" in filepath and not content.startswith('"use client";'):
        content = '"use client";\n\n' + content

    # For page.tsx and about/page.tsx, strip onMouseEnter and onMouseLeave
    if "app/page.tsx" in filepath or "app/about/page.tsx" in filepath:
        content = re.sub(r'onMouseEnter=\{e => [^\}]+\}', '', content)
        content = re.sub(r'onMouseEnter=\{e => \{.*?\}\}', '', content, flags=re.DOTALL)
        content = re.sub(r'onMouseLeave=\{e => [^\}]+\}', '', content)
        content = re.sub(r'onMouseLeave=\{e => \{.*?\}\}', '', content, flags=re.DOTALL)

    with open(filepath, "w") as f:
        f.write(content)

print("Recovered files:")
for f in file_contents.keys():
    print(f)
