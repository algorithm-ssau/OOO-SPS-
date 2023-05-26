FROM mongo

COPY machinery_info.json /machinery_info.json

ADD start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]