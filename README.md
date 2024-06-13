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

```sh
rsvg-convert -f pdf -o /svg/asset/output.pdf /svg/src/input.svg
```
