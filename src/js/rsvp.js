'use strict';
var secretGuestData = [{
    "name": "U2FsdGVkX1/5zXDir/S8h3GFSYvZiwapnibI3hIzHeE=",
    "email": "U2FsdGVkX1+X44i/YCqxs9uRjFhADN42siQRCWX+HuH3Yc0JAL5HOQoAr/eJOwhz",
    "plusone": "U2FsdGVkX19T8xrvmyRpajTynLKcBNXRJVvUQdzz2jsjUIfErV84+f8V1sQf8E4R",
    "secretcheck": "U2FsdGVkX1+UDiCSHB9QPil/5c1qc8fK50K9oYXNmCCrZTaaAIlfq1B9YPXvbQ+C",
    "formUrlCode": "U2FsdGVkX1/MBsh9J/d7LFjflRmFzRIQuNAVbpi6Bf1eEpArSF+SadXxOe1GpTGbWkwxjx9Km5wGDgCUceHBsHz47fthER9fO78iAG3Htfo="
  },
  {
    "name": "U2FsdGVkX1/u26RaZCkfDnri2xXNAySMe99OS7DvGbg=",
    "email": "U2FsdGVkX1/e93chtZWnl/Fb38r3hoEwWWa4zxDaAMqXpFzwqGnAk5SPP7L1ZC+B",
    "plusone": "U2FsdGVkX1/6d6C9dy7PcGsY7o+lJhncLe+BOVFHVVE=",
    "secretcheck": "U2FsdGVkX189vkaIERN9dfjWoYPtXQu1m3YaL9oDDQ0DvZelve9vMu20oQlsmYAK",
    "formUrlCode": "U2FsdGVkX1/Ml3oAPhvk97+uh9Wzru+3yTLrFpp27sRHC8ShBhBBYzA+7J1nDPH8MopAU1OAU8mOSmqqLI2sFY0E2WObzZzOTTINz1IotL8="
  },
  {
    "name": "U2FsdGVkX193eJTj5+jomWj/olzSghZnIff3RGbp6xc=",
    "email": "U2FsdGVkX19DaMCh1u3vAXj/K5krL7uOHMy1Qz6r/Dw=",
    "plusone": true,
    "secretcheck": "U2FsdGVkX1+LwJfpV2bctGdU/ENThQ9o64GoDt8jv+3lHf2k+BMNHT2eMqtBn7Se",
    "formUrlCode": "U2FsdGVkX1+s+U65D239enJtxH94xAfJqPtMetFJfu+k6trwrP/WOYAEzoJ/76NopgUzoYHMGTZd70/HIaMszviP7COIOCfDE5g+vHVXpLw="
  },
  {
    "name": "U2FsdGVkX19PDCvpPYsIB8C9nvTZB4W1d0Q9NEVP/E8=",
    "email": "U2FsdGVkX1+P98jGfkLHahdLOwtiuveCjuRh5vBuIjBhcAOFS6RRwRx8X8gH/37I",
    "plusone": "U2FsdGVkX1+hW9illqfSjyR192d0+i3Fn/5GIvBgMDA=",
    "secretcheck": "U2FsdGVkX18TKqG4aqpAZIavjL1lQPek/bmNtRof/LCGcASka7ee/xrP6Hkzv9in",
    "formUrlCode": "U2FsdGVkX1/lf1MshfDkIGBiUM+QHxr7yYOy/IpjEBfCZDOa6T3I9FEd926cLj0h2DJw+2dOZZ5CYQDaTWRlPwG16w28sl1iDd/bw/j7RYg="
  },
  {
    "name": "U2FsdGVkX19Mkaza3BR40El3/cZynK0BpwvA4Be1SGo=",
    "email": "U2FsdGVkX1+pUKZQpLS7ryKXIVuCCMjPIq1JixvrIoo0Efg4wEDbnjhkjOscEEBb",
    "plusone": false,
    "secretcheck": "U2FsdGVkX1+9TcXr75u7WMTejqRGYubG57BS7PqYivQeGzhkONB2Rvii3MZCo38J",
    "formUrlCode": "U2FsdGVkX1+Dn02c6kgpUwfoZqXoJhdzuR4NATrMW14ndUvHgpkTwsBJoz0oGjsyuuTuEW7O6o0dnuYsga1D1SIfp1vn5xPZCCxXD1TKjNE="
  },
  {
    "name": "U2FsdGVkX19mQcv6zJK9nHTyKKmpdOdHZnribbXYKVQ=",
    "email": "U2FsdGVkX19HJFRKE58TxMnb+SVTYRSOUdNd0O5VHHqsKWFS3i/fXFz5CmYYQWv6",
    "plusone": true,
    "secretcheck": "U2FsdGVkX1+cXGWclZfcWv6LYzkCrknF4UtCNlkAnYnyPOkKP7yGQCsoqQ9JDl5+",
    "formUrlCode": "U2FsdGVkX1+G+x9XG942S9DImIlGmvJ2nbsKqldg+47sbVJvcpeQ5CH3cDFFIUTsNr7FCRtcJ+/WrqUX+2zDv+xOpkfhPxBurntHgyjLEgs="
  },
  {
    "name": "U2FsdGVkX19DE/uiDGHyMYwnv7e83P+H/52EXVA075EaGw95VGIQwtOeGcVGfgia",
    "email": "U2FsdGVkX1/YajgX27hSXoLYLk/N/9Q5CWpfkOfGoTCRhmB744+zMeXbmKDibnpK",
    "plusone": false,
    "secretcheck": "U2FsdGVkX191r5UXDz/dN7KrhrzpxYWotcp99dTahyDOdJd1a9SHWVaE1xhGg9Cq",
    "formUrlCode": "U2FsdGVkX1+vrYvVNL2aa+KymelrNOBs9LAFNhfftqiHWXluFpqmDWYpLTa28nJVg+udxny9Xl8GOMDyiAzIJCpwB5fX7sA5i4OAxbaw+hE="
  },
  {
    "name": "U2FsdGVkX18JvICcKG1ZpQ+0bAqza9K69XfX6xf7J1qbV5h88BsxbtzvTMpOE8b2",
    "email": "U2FsdGVkX19H5aFTBclTUXBZagcH2K7aaIdsL1X4dYNbeuNObSikEJKUNWwvXV7O",
    "plusone": true,
    "secretcheck": "U2FsdGVkX18CfMeN2pxaOc0mTCpCZr9MXowpVXkwthUXNjTFD1T4hZiZX+7STOYF",
    "formUrlCode": "U2FsdGVkX18Jusob7MkOgmSlVUjax5wg8e2GYvbqN14qhNRORGRV7gZZTNKvWGOzp5irYQ09SYDycvJhLnECo5Wtc9diolGdOldiQgVF3kQ="
  },
  {
    "name": "U2FsdGVkX18MvQBTJvuP/KZS2kxIkZYaqTO/hAPjaxU=",
    "email": "U2FsdGVkX19Jj86ffRSltquGaOTZxqsP31oPxWOk0MovMpAGD9V50c7G4sTNpdpi",
    "plusone": true,
    "secretcheck": "U2FsdGVkX1/8Ozx3oj+NuHdMP3fdHpR8U1cuX/+cN9/9CrLFhkgkRMQh4ZXzQRxk",
    "formUrlCode": "U2FsdGVkX18mIFr+Fl2pprPPMfgA016MzB0g32rtE4w5WaUfTauCXfalX/BDt+vE/6Xl5hauEaRjjleKx7oNBfx9h5mzSxn7yk4gnxqXcTs="
  },
  {
    "name": "U2FsdGVkX1/DTKOp87u3C+/oHy83qdUJz7ppwdFK4Zw=",
    "email": "U2FsdGVkX183aoPJoIS2P8dKhoWz/5MHNzSmDmmTXRB5HHK36cm2xAqbtylLCV2t",
    "plusone": true,
    "secretcheck": "U2FsdGVkX1+Taj2ncZyg/1y+xCyYGgvQXO/ouGCq7pvfs8W9LTZkgZzQt4wg34qE",
    "formUrlCode": "U2FsdGVkX1+iOaqM+r//6IXRbXhO0H1Fjjg5EQapzaVVDSz/53ltHRHmkXiYP5kBH5I2heJHhCUJmwzWHIMRqzCSUd5s3MQNOkU37VoGlfc="
  },
  {
    "name": "U2FsdGVkX1+VTpOBVkl6f8pEbbgwwiBRfjGC2uSs9qw+3fcpHyAWiIu/u2LjxkGM",
    "email": "U2FsdGVkX1/5R0Bw9MBbXHq0zYx1J1N1oLwhbhfr0mA3OZ7m4sfnMc7E6JL6/wIp",
    "plusone": "U2FsdGVkX195PjsCbFtl0xp5JdbycmmIXg3Yltjtm2I=",
    "secretcheck": "U2FsdGVkX1+xe36K29/Q8hD/cwovNBVs+ED+fJCCG8R9DZdvuEoorw+dlslVUoRA",
    "formUrlCode": "U2FsdGVkX18hPrYSbiy3oyIKkh8tL/F80Boafh2Wh0CmXrlay4u3MFYa24g5CCj84QczLO+Z/4sLtt1fK+15hw3a9uqv2q3bqhBC5BnqNsc="
  },
  {
    "name": "U2FsdGVkX1/h/tcGZpDEFFry7zMPvj4wvgLgVRwHCVk=",
    "email": "U2FsdGVkX19ZBN3kpqK8ZZ9/iuYKH8+zlp1SSQjAtYhUCKf+dRtqdZoOdKKLc9QA",
    "plusone": "U2FsdGVkX1/pesFr9WIqmjEJi8Yc3xsT47USGFFO2cY=",
    "secretcheck": "U2FsdGVkX19DtPHNCIfljfboqgUtAvGzc8Q7l6ZelCQlTUpVq18Fe/5vSDxfBJya",
    "formUrlCode": "U2FsdGVkX1+MzdBCl84kG9Tq437EAtVBegTOR8wJsEeGV7p4Eq4cEYAgdtdZmVABFixbZqZKAtR5mRkuP4SI47U8KoFmvOw2QCvJinO4iIM="
  },
  {
    "name": "U2FsdGVkX19+kNswhc+suYLtEeAsBDZkTSX7+FOK7dQ=",
    "email": "U2FsdGVkX18GqLf1ND46r7/2xqAc+/2VvbydWpRIfu5Hnz9Qz4+7I0k+kDhZiUi5",
    "plusone": true,
    "secretcheck": "U2FsdGVkX19WLEXUDdjT17hD91q8/6GoUZ4AmNWPLVbDARXY8SFWnWrelN2/rNJM",
    "formUrlCode": "U2FsdGVkX18bZ5OqmUBpZT3NFXX/a7gXNE/lM5vAl0rx3Dch6fUFjK4poBPlCDfwDZovjTM/R0ZIpeUcuYtDqvgNhtFj1sFDkHBgaxcqFDQ="
  },
  {
    "name": "U2FsdGVkX19BMcT2ag7Fi0W7SvBwhT7fc86eoQD5h7g=",
    "email": "U2FsdGVkX19DTOvAWtMs2yfq3OwpNxtlMlA49jK/huF0q3SWuumu/0cgypvXA33V",
    "plusone": false,
    "secretcheck": "U2FsdGVkX19mLWzmY8C9toBH97tMM61amxiK195ArMy4IYl6W9V8jzP4SAcfdyGO",
    "formUrlCode": "U2FsdGVkX1+OIb1iRCg3sVSaxRObFOzDzheYl8jAfJVdnlA9dt6MIdFqJ+tA2bKg+qCBAOlnXdDfN2hR+ZhVnVzwqlMzM2N2cqtqvbjZhhw="
  },
  {
    "name": "U2FsdGVkX18fwKE0Qb1u8bJdPSey4yLeYguDFIqb+40=",
    "email": "U2FsdGVkX19IkQKRpYlCzV8RnlKkivaZ62LrQG1qgOHxGEuRGswe0C7sSBqlwe08",
    "plusone": false,
    "secretcheck": "U2FsdGVkX1+9aqq/Qy3+mDdK7WbPndLFQwCKmF4gTIliLi0coq31WKPYh/kensT5",
    "formUrlCode": "U2FsdGVkX1+/ZQprIVBHrZNJE+XqYveaeefRyNkDgPcJZOmLKRWSnmslFFyHjjNcOofLKF3J6fG3DTAoiJaql81rkXQKlj3MPw5xXIGTQug="
  },
  {
    "name": "U2FsdGVkX1+8l/i77Rs2WjFBw2VJhxTs0SO2nGA/iYw=",
    "email": "U2FsdGVkX1+q7QkIYZqrM2/enBLykw0vm9Jv3Q8eYLeFy3IwjAS/uQPFOk3bOyKK",
    "plusone": false,
    "secretcheck": "U2FsdGVkX184R5L5mkjxk+/Dq8Jz/y2ZWZJ1EPxy+lmMqH2sxzNkQVRxvLwABrVf",
    "formUrlCode": "U2FsdGVkX1/W+v73PZnJ+pzI3T6t4UpKrim1Q81h1KYmjAKQqPeIc0R5mcR8aPPAjpEOXRy+MmnaswdhmcQPmLKgU7JJhZHmxg36TUb2ZiA="
  },
  {
    "name": "U2FsdGVkX1+3YURc/8ZbEJxLkQ5KX0DoOA/wgJMGtUE=",
    "email": "U2FsdGVkX1+Au1GSaLuMMjjYu00zl7d87ZsNsMy5MKZvxaS2GwpvGD48/VXBNHK1",
    "plusone": "U2FsdGVkX19KAatDUX645gLkZ5s/XvMXY9xCSyBBYRw=",
    "secretcheck": "U2FsdGVkX1//mqIVDnHlQOP1VLzVqT5LEPWeII2LQTYliTLoaAEAsanmdL7tJLiF",
    "formUrlCode": "U2FsdGVkX18kls2Ls9GHK8i1LgGLbFZxnJR3A+UaDDtE69WgIdjNya4UfZACQ0t2apnwwly3ZPBnx0kx7XZdXFcgq2e3VfpQL51+a+lWLP8="
  },
  {
    "name": "U2FsdGVkX18Mlkr7om5fjJ0Ox26ktTShduA/tSmdZFk=",
    "email": "U2FsdGVkX1/DiAGyGZ24ELYA0IsS4ofcy7oDXNO1oDq7vo8vJSUjXGru1g284JAc",
    "plusone": false,
    "secretcheck": "U2FsdGVkX18AvRlMxPXYQ+PMiMvmo00JxWFAt1gkpU630dLaFxj3GdWm6+AA12AY",
    "formUrlCode": "U2FsdGVkX18PF+pXNJN8Nmz4itowfn6pX8mvLEKEG2/1Wj4/KUtkOQXzFBgHaD+Wk0Z/MM/7V046Bl6YYfwo2gWe2Z5+mOZXARvQKibWuco="
  },
  {
    "name": "U2FsdGVkX1+8VkcRzjq/h+WGsG1ya1rVsXD3HxpUmxY=",
    "email": "U2FsdGVkX1+jpObf/hNUIx+Nw39ukpNC2nu/xumiH0BM+QK1dhbjxyb4sCJDGXml",
    "plusone": "U2FsdGVkX1/GPwssiHK3fznO9m77tvpsKat6RgU5LJk=",
    "secretcheck": "U2FsdGVkX1+9S7IBFY+MRAt8zRk/ef4JlKBOUrXJTfKqEfdpLZYz9ojebUFEw45b",
    "formUrlCode": "U2FsdGVkX1+ukS7zKhwTJg98BuuM+EMcmaa54HVeYZyue4uK6XdoWZlorfTLpHryAA5S3O+a4f5FUuBdIBfvVE7wErmCjuj7ZtIav6m/FBg="
  },
  {
    "name": "U2FsdGVkX1/c+6i7mse9Sxb06Xe+Wp6cOm2DW4Q6Vyw=",
    "email": "U2FsdGVkX1/1GvfjEe0TVVId3DO0OCbE4tzb9PqTX7dFq+k8cnkBacnNcndNTA93",
    "plusone": false,
    "secretcheck": "U2FsdGVkX1+5S3MWTGktQlR8VN75ipcBx/RGqYYSRScSr8NNhwYqj22IVN+pwks6",
    "formUrlCode": "U2FsdGVkX1/j+5pZhbpRsNoR+MpktOZzxEt6Bs46FE2CVW1HCCwZ+drfkeGh5DCeGTiuIKjZMgTj/7P6IL52zldR2BXGn0XCow5JClkm8WQ="
  },
  {
    "name": "U2FsdGVkX18lRB8LHPS7EaFKtCzcvap6qlJUPdJkOuc=",
    "email": "U2FsdGVkX1/GkOOJwW48yg0T5a9rXw+navAUVhYRU6KP8BeMRzjJxAoDB5CI5BB7",
    "plusone": "U2FsdGVkX18OveLeH48Nokx1FZFXRP95JyR51nDBu8w=",
    "secretcheck": "U2FsdGVkX18RKDQIdy628xzT5qktHmDOItKNsYFhyGoo3xpUb8ka0RWi7T6OE2UP",
    "formUrlCode": "U2FsdGVkX1+dCLRr/eKST9IsfFfi4lVZvmiqANiNOt0ApLt+MxTtCnbAzpH6l0AkVdmHV6kAmh6W23Nl8cB6WimK23whi9mksX4n/8yLkQY="
  },
  {
    "name": "U2FsdGVkX195OHnSzED+d914+RutQ6zWM0ww2AkhAkg=",
    "email": "U2FsdGVkX198urUxTCLkx2qsQCFHikrFi4IrZW0aE6nWatHw4mFVa2hJGcNYYrhI",
    "plusone": false,
    "secretcheck": "U2FsdGVkX18c6QqpBYIBknxxMWZpTQ632ONSchxAWJuC0ncQk9m3C4OVYfGaOgQj",
    "formUrlCode": "U2FsdGVkX1/pTkf0r7IUjsVXj9yvPVOagTl9xOyI2Eoxs05MROP982IusFgSaGUYSavF3xkHkcY4j0JQzY6JcQ77wK/5tOFuutE1UZjAs24="
  },
  {
    "name": "U2FsdGVkX19Cok0HRKH7nQJEAZ6FVUXc+e5VqU3S+I0=",
    "email": "U2FsdGVkX19y/wjdsQGS+vDPW9tAZE/DWmEvOvrWSKJmhYLsCZL7s3GT7AqsQ/nk",
    "plusone": "U2FsdGVkX19rDPrZfILEyQ06C1Gk83JK1amU+ZXIZQU=",
    "secretcheck": "U2FsdGVkX19Z8LlwrOkTa/V9BLK8Hg5gDwJMOOQd+lF22UWna04Cm3JucheJvJG5",
    "formUrlCode": "U2FsdGVkX1+MIjGMO8nJPXapwsU7EqouVHd/SJFqz1XritzQn0vSf1R/iduFQX5yLgCsNhQoR+D9trL//iDus0ZffUSiqvDY2MeC8J2zdL8="
  },
  {
    "name": "U2FsdGVkX1+nAgPy/0ibGNVZ3p4pA+KYZEvZytWh6ZY=",
    "email": "U2FsdGVkX18RNtSRVqX7L1zkKbIeWBX68G3EsJlQvfwvFM9EHOkahB3XOFVDxjC5",
    "plusone": false,
    "secretcheck": "U2FsdGVkX1/o7ps39LvBOFvxn4XCVXxCSByP4eJDAr3h0xlRbeT/MR2AoErHefkz",
    "formUrlCode": "U2FsdGVkX18+5x2RdtKgtDyblq1q60/OOqTgei4SqrkJaAzlkjHwxdP/Xg522mIh612mTW4g2y3tWSMY140Uysk+l69cvzLBwBVoZ53ELRU="
  },
  {
    "name": "U2FsdGVkX1+0PIcyHLhLS/TzhYpXZ+0dIxIZQwUMfds=",
    "email": "U2FsdGVkX19T9XHRLO9x2PmivY1VJycFbWJ3IejNz8AvxSc6Y92vjT6YE7ev1inA",
    "plusone": false,
    "secretcheck": "U2FsdGVkX1+HKP1Uj1l6VL7QG25QClTxTGlfi37iFtN+ZgJPyFZ+C/QR8Sv/fyqV",
    "formUrlCode": "U2FsdGVkX1+4Rt9cTOH4SCfVTWPWN45ejXTH0t+0SYgD8oVs96fJ5gxZpHCuahM1qnCLPPJLNKm0jQRYrmo1TQodaY9Ol6aUdHy28dElHR0="
  },
  {
    "name": "U2FsdGVkX1/xf06NjlZ/5fXyz5gui0vqRIC1W37NyoU=",
    "email": "U2FsdGVkX1+3btBKVemQxUdmPGYrg/dwROGL35/ghOABkvSWbmpJ+Q5Lrp0NpL++",
    "plusone": true,
    "secretcheck": "U2FsdGVkX18QkP0F9eYtidC+tdbqe2ZfNgfk8hZq0WZVKgMGM/OHrmGHGlGCCYIN",
    "formUrlCode": "U2FsdGVkX1/6QX/lXWtZOy0NZdKpCXbwz5YeNLdXixp5+bYxc8FRx/eg225wq1Gk9TarbOPR6SrMGm/RkTGC1vlHYeTVoAL4yERQ/FHgOZc="
  },
  {
    "name": "U2FsdGVkX19wqoBpWhzFs23KucGN2VVrDxzTohvfR4kzM9rq8l3Rlsq5hjRXZXeb",
    "email": "U2FsdGVkX19jCKcWkAa9FxKlD/hprXCzNGczevjCCxy2MSJX3IPbj/Dj3wxicOJg",
    "plusone": "U2FsdGVkX19aym3j09KkESrkMhcuACv/ar9s59G0PzUOiCFajYL1Y0on6i82PvsX",
    "secretcheck": "U2FsdGVkX19oAXFao7+6IzrSPnQpZIrC19QVQERJZikD6IB1XtOeBAzniBENokr8",
    "formUrlCode": "U2FsdGVkX182WUf3u+Dzpz3uomhMlMsV+VaegoGNl8gesDdpTs4IIKuHqOa28WUXlmh2kNcReKarjXikR6naLvcR1qmE+49vdvuCkIgFKuM="
  }
];

var decryptedGuest = {};

function checkAuthInput() {
  var email = document.getElementById('secretUsername').value;
  var password = document.getElementById('secretPassword').value;
  if (email.length === 0 || password.length === 0) {
    return;
  }
  var secret = email.trim().toUpperCase() + ' ' + password.trim().toUpperCase();
  useSuperSecretCode(secret);
}

function useSuperSecretCode(secret) {
  if (!secret) {
    return false;
  }
  var foundGuest = false;
  var tmp;
  for (var i = 0; i < secretGuestData.length; i++) {
    try {
      tmp = CryptoJS.AES.decrypt(secretGuestData[i].secretcheck, secret);
      tmp = tmp.toString(CryptoJS.enc.Utf8);
      if (tmp == '2995520311108823') {
        foundGuest = true;
        for (var key in secretGuestData[i]) {
          if (secretGuestData[i].hasOwnProperty(key)) {
            if (key !== 'secretcheck') {
              if (typeof(secretGuestData[i][key]) == 'boolean') {
                decryptedGuest[key] = secretGuestData[i][key];
              } else {
                decryptedGuest[key] = CryptoJS.AES.decrypt(secretGuestData[i][key], secret);
                decryptedGuest[key] = decryptedGuest[key].toString(CryptoJS.enc.Utf8);
              }
            }
          }
        }
      }
    } catch (e) {}
  }
  if (foundGuest) {
    acceptLogin();
  }
  return;
}

function acceptLogin() {
  document.getElementById('rsvp-login').style.display = 'none';
  document.getElementById('rsvp-form').style.display = 'block';
  document.getElementById('rsvpEmail').value = decryptedGuest.email;
  document.getElementById('rsvpName1').value = decryptedGuest.name;
  document.getElementById('rsvpName2').value = decryptedGuest.plusone;
  if(decryptedGuest.plusone && decryptedGuest.plusone != ''){
    document.getElementById('plus-one-optional-group').style.display = 'block';
    if(decryptedGuest.plusone === true || decryptedGuest.plusone.length <= 1){
      $('#plus-one-optional-group .uneditable').removeClass('uneditable');
      document.getElementById('rsvpName2').value = '';
    }
  }
}

function rsvpFormSubmit() {
  // Google Sheets api:
  var formUrl = 'https://docs.google.com/forms/d/' + decryptedGuest.formUrlCode + '/formResponse?embedded=true';

  var formTags = {
    email: 'entry.1556369182=',
    meta: 'entry.1334782638=',
    name1: 'entry.2092238618=',
    answer1: 'entry.1753222212=',
    name2: 'entry.199878623=',
    answer2: 'entry.46739732='
  };
  var formInputs = {
    email: decryptedGuest.email,
    meta: decryptedGuest.formUrlCode,
    name1: decryptedGuest.name,
    answer1: $('input[name=rsvpAnswer1]:checked').val(),
    name2: $('input[name=rsvpName2]').val(),
    answer2: $('input[name=rsvpAnswer2]:checked').val()
  };

  // xhr:
  var r = new XMLHttpRequest();
  r.open('POST', formUrl, true);
  r.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  r.onreadystatechange = function() {
    document.getElementById('rsvp-form').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';
  };
  var formDataURI = '';
  formDataURI += formTags.email + encodeURIComponent(formInputs.email) + '&';
  formDataURI += formTags.meta + encodeURIComponent(formInputs.meta) + '&';
  formDataURI += formTags.name1 + encodeURIComponent(formInputs.name1) + '&';
  formDataURI += formTags.answer1 + formInputs.answer1 + '&';
  formDataURI += formTags.name2 + encodeURIComponent(formInputs.name2) + '&';
  formDataURI += formTags.answer2 + formInputs.answer2;
  r.send(formDataURI);
}
