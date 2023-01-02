FROM envoyproxy/envoy:v1.22.0

COPY ./envoy.yaml /etc/envoy/

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log