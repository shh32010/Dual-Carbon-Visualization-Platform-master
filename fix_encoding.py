import os

# Read the garbled file
path = r"E:\26年应用软件系统开发\Dual-Carbon-Visualization-Platform-master\src\views\indexs\left-center.vue"
with open(path, 'rb') as f:
    raw = f.read()

# Try different encoding combinations
encodings = ['utf-8', 'gbk', 'gb2312', 'gb18030', 'big5', 'shift_jis', 'euc-kr', 'iso-8859-1']
results = {}

for enc in encodings:
    try:
        text = raw.decode(enc)
        # Count Chinese characters
        import re
        cn = re.findall(r'[一-鿿]+', text)
        results[enc] = (len(''.join(cn)), cn[:10])
    except:
        pass

for enc, (count, samples) in sorted(results.items(), key=lambda x: -x[1][0]):
    print(f"{enc}: {count} Chinese chars")
    for s in samples:
        print(f"  {s}")
    print()

# Also try: decode as one encoding, encode as another
print("=== Cross-encoding attempts ===")
for src_enc in ['gbk', 'big5', 'shift_jis', 'euc-kr', 'iso-8859-1']:
    for dst_enc in ['utf-8']:
        try:
            intermediate = raw.decode(src_enc)
            result = intermediate.encode('iso-8859-1').decode(dst_enc)
            import re
            cn = re.findall(r'[一-鿿]+', result)
            if len(''.join(cn)) > 5:
                print(f"{src_enc} -> latin1 -> {dst_enc}: {len(''.join(cn))} Chinese chars")
                for s in cn[:10]:
                    print(f"  {s}")
        except:
            pass
