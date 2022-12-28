FROM  python:3.8.13-bullseye

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /uploadimage

COPY requirements.txt /uploadimage/
RUN pip install -r requirements.txt

# copy from the current directory of the Dockerfile to /uploadimage in the image
COPY .pg_service.conf ~/
COPY .my_pgpass ~/
COPY . . 

EXPOSE 8000
