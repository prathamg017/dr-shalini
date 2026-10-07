import re

files_to_fix = [
    "src/components/Footer.tsx",
    "src/app/page.tsx",
    "src/app/about/page.tsx",
    "src/components/MedicalDisclaimerBanner.tsx",
    "src/components/Header.tsx"
]

for filepath in files_to_fix:
    with open(filepath, 'r') as f:
        text = f.read()
    
    # The stray '}' lines look like this: "                  }\n"
    text = re.sub(r'(?:[ \t]*\}\n)+([ \t]*>)', r'\n\1', text)
    
    with open(filepath, 'w') as f:
        f.write(text)

print("Done fixing syntax.")
