import urllib.request
import re
import json
import os

url = "https://www.youtube.com/playlist?list=PL6GgTa6SShSGix5GEM5cmQl2t3kHcWjcK"
req = urllib.request.Request(
    url,
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
)

print("Mengambil data playlist YouTube...")
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode("utf-8", errors="ignore")

vids = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)
unique_vids = []
for v in vids:
    if v not in unique_vids:
        unique_vids.append(v)

videos = []
for vid in unique_vids:
    oembed_url = f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json"
    try:
        req2 = urllib.request.Request(oembed_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req2) as resp2:
            data = json.loads(resp2.read().decode("utf-8"))
            title = data.get("title", "")
            author = data.get("author_name", "")
            thumb = f"https://img.youtube.com/vi/{vid}/hqdefault.jpg"
            videos.append({
                "id": vid,
                "title": title,
                "author": author,
                "thumbnail": thumb,
                "url": f"https://www.youtube.com/watch?v={vid}&list=PL6GgTa6SShSGix5GEM5cmQl2t3kHcWjcK"
            })
            print(f"✓ {title}")
    except Exception as e:
        pass

out_file = os.path.join(os.path.dirname(__file__), "..", "content", "data", "voxdei-playlist.json")
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(videos, f, ensure_ascii=False, indent=2)

print(f"Berhasil memperbarui {len(videos)} video ke content/data/voxdei-playlist.json")
