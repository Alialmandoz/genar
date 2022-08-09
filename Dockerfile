FROM python:3.10-bullseye
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Hora desfasada, Debian
RUN rm /etc/localtime
RUN ln -s /usr/share/zoneinfo/America/Argentina/Mendoza /etc/localtime

# Si está basado en Ubuntu / Debian
# apt-utils se debe instalar antes.
# Byobu tambien es util para intervenir y tener un mini ide dentro del ontenedor
RUN apt-get update -y && apt-get install -y -q apt-utils && apt-get install -q -y multitail vim mc byobu  sqlite3 nano net-tools locales mariadb-client-10.5 python3-dev default-libmysqlclient-dev build-essential && apt-get clean && rm -rf /var/lib/apt/lists/*_*
RUN pip install --upgrade pip
RUN mkdir -p /code/
COPY requirements.txt /code
WORKDIR /code
RUN pip install -r requirements.txt
# Para evitar la queja de pudb sobre que no hay locales definidos
RUN echo "es_AR.UTF-8 UTF-8" > /etc/locale.gen
RUN locale-gen
COPY . /code
EXPOSE 8000
