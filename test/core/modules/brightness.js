const benchmark = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAAHdElNRQfjAgULAir0wiRrAAAADUlEQVQY02NgGAXIAAABEAAB7JfjegAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMi0wNVQxMTowMjo0MiswMjowMCdP+X4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDItMDVUMTE6MDI6NDIrMDI6MDBWEkHCAAAAAElFTkSuQmCC",
  testModule = require('../templates/module-test');

testModule('brightness', {brightness: 1}, benchmark)