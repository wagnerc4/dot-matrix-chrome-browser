# dot-matrix-chrome-browser
Print to esc/pos printer with Chrome OS or any OS with chrome browser installed

## for linux:
```bash
lsusb

udevadm info -a -p $(udevadm info -q path -n /dev/bus/usb/001/002)

ls -lh /dev/bus/usb/001/*

/etc/udev/rules.d/99-usb-lp.rules
  KERNEL=="1-1", SUBSYSTEM=="usb", MODE="0664", GROUP="plugdev"

/etc/modprobe.d/blacklist.conf
  blacklist usblp
```

More information: [https://hackaday.io/project/20200-chrome-escpos-printer-app](https://hackaday.io/project/20200-chrome-escpos-printer-app)
