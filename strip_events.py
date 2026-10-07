import os
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
        content = f.read()
    
    # Remove onMouseEnter={...} and onMouseLeave={...} spanning multiple lines or single line
    content = re.sub(r'onMouseEnter=\{e => [^\}]+\}', '', content)
    content = re.sub(r'onMouseEnter=\{e => \{[^\}]+\}\}', '', content)
    content = re.sub(r'onMouseLeave=\{e => [^\}]+\}', '', content)
    content = re.sub(r'onMouseLeave=\{e => \{[^\}]+\}\}', '', content)
    
    # For multiline blocks:
    content = re.sub(r'onMouseEnter=\{e => \{.*?\}\}', '', content, flags=re.DOTALL)
    content = re.sub(r'onMouseLeave=\{e => \{.*?\}\}', '', content, flags=re.DOTALL)
    
    with open(filepath, 'w') as f:
        f.write(content)

print("Done stripping events.")
