import re, os, urllib.request
from pathlib import Path
from urllib.parse import urlparse

root = Path('.').resolve()
public_dir = root / 'public' / 'images'
public_dir.mkdir(exist_ok=True)
files = [root / 'src' / 'components' / 'Header' / 'index.jsx', root / 'src' / 'pages' / 'LandingHome' / 'NewLanding.jsx']
pattern = re.compile(r'https?://[^\s"\')]+\.(?:jpg|jpeg|png|webp|gif|svg)', re.I)
seen = set()
count = 0
for file in files:
    text = file.read_text(encoding='utf-8')
    for url in pattern.findall(text):
        if url in seen:
            continue
        seen.add(url)
        path = urlparse(url).path
        name = os.path.basename(path) or f'image_{count}'
        dest = public_dir / name
        if dest.exists():
            print(f'SKIP existing: {url} -> {dest.name}')
            continue
        try:
            urllib.request.urlretrieve(url, dest)
            print(f'DOWNLOADED: {url} -> {dest.name}')
            count += 1
        except Exception as e:
            print(f'FAILED: {url} :: {e}')
print(f'TOTAL_DOWNLOADED={count}')
