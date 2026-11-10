import os
import glob

out_dir = r"E:\Semester 7\GBDI\Website_GBDI\out"
css_files = glob.glob(os.path.join(out_dir, "_next", "static", "css", "*.css"))

if css_files:
    css_path = css_files[0]
    with open(css_path, "r", encoding="utf-8") as f:
        css_content = f.read()

    html_files = glob.glob(os.path.join(out_dir, "**", "*.html"), recursive=True)
    count = 0
    for hf in html_files:
        with open(hf, "r", encoding="utf-8") as f:
            html = f.read()
        
        # Inject style if not present
        if "inlined-tailwind-css" not in html and "</head>" in html:
            html = html.replace("</head>", f'<style id="inlined-tailwind-css">{css_content}</style></head>')
            with open(hf, "w", encoding="utf-8") as f:
                f.write(html)
            count += 1

    print(f"Successfully processed {count} HTML files with inlined CSS!")
else:
    print("No CSS files found in out/_next/static/css")
