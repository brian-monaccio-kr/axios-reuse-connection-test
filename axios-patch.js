req.on('socket', function (socket) {
  const { remoteAddress, remoteHost, remotePort, localAddress, localPort } =
    socket;
  console.log({
    from: 'assigned',
    remoteAddress,
    remoteHost,
    remotePort,
    localAddress,
    localPort,
  });

  socket.on('lookup', function dnsLookupAt(err, address, family, host) {
    console.log({ err, address, host, family });
  });

  socket.on('connect', function logSocketConnect() {
    const { remoteAddress, remoteHost, remotePort, localAddress, localPort } =
      socket;
    console.log({
      from: 'connect',
      remoteAddress,
      remoteHost,
      remotePort,
      localAddress,
      localPort,
    });
  });
});
