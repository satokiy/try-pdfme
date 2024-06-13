# try-pdfme

[pdfme](https://pdfme.com/)を試す。

## 起動

```sh
npm install
```

```sh
npm run dev
```

## SVG to PDF

```sh
docker build -t svg-to-pdf .
```

```sh
docker run -v .:/svg -it svg-to-pdf
```

### directory

```sh
asset
  - svg
    - filename.svg
  - pdf
    - gen
      - filename.pdf // 生成されたPDFが配置される
    - before-unite
      - filename.pdf // pdfuniteで統合したいPDFを配置する
    - united
      - combined.pdf // 統合されたPDFが配置される
```

convert
```sh
./svg/convert.sh filename
```

unite

```sh
./svg/unite.sh
```