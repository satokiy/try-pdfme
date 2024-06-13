FROM ubuntu:22.04

RUN  apt-get update && apt-get install -y librsvg2-bin && apt install -y poppler-utils

CMD ["bash"]
