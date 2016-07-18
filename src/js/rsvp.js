'use strict';
var secretGuestData = [{
  "name": "U2FsdGVkX1+ZkXwMn/d4cmzQcTappewnwNFKJSQPsuk=",
  "email": "U2FsdGVkX18Ge5zcGyCxE5FuC0yo9HJ76GodF8Jl8GEPF1yiVPQnpVAJBkQ6OnOY",
  "plusone": "U2FsdGVkX1+mEGOGMLxXv4Hp57WqhF8KAJyAuK59A52orBkM0GcR6hVy2m/jV+b0",
  "secretcheck": "U2FsdGVkX1/HTebOun9mPDVAXrmpzzzZfRVguVpLs4FQEc2GWBMfrU72nnSTJmG0",
  "formUrlCode": "U2FsdGVkX195EFCaoASulRoH2SISqbipS/mrcNz2vnEmkMFipweJ0lrFqs27zloqZ6RpzIDHFTqKzSvA+QBziQ=="
}, {
  "name": "U2FsdGVkX19Ye6Jie5/N6bNHUCnIBTtYGwTLL9gvIVQ=",
  "email": "U2FsdGVkX1/1F62+lB1GpOlNJp3o1+ait16ylyvO407EmrCuMwl2/5CBcMkHL6/d",
  "plusone": "U2FsdGVkX198JyhUdnySqY84ZeaV90N8BK2hdZoyP0o=",
  "secretcheck": "U2FsdGVkX1/l92YZJGUS3BU2VyBaMJ7f84pqAabtnl0Sk8lVsDmGLNkFUkuJNAUY",
  "formUrlCode": "U2FsdGVkX18pc7YwMiT+B9mJHSEWagWr457mmUID4pcAuCOXf+DMUhXjVSgVIfhIv0x5zZdYjlf8GUWz4JBiYA=="
}, {
  "name": "U2FsdGVkX1//YTJ4zS6FD8lKu5baSw/fKKE1xT0AKlo=",
  "email": "U2FsdGVkX18D8AA9tBepxi922YnvYlaUlFv7QbDFAzM=",
  "plusone": true,
  "secretcheck": "U2FsdGVkX1+SifZPwU02s4h1hEEbgwv8bXnbKtKWRhLMf6fsvX5bDC8V5mPW2f/k",
  "formUrlCode": "U2FsdGVkX18MBL174A3xcmux8u4BaZMEBmehGvOnFJOOxw3FCzhkBbNwLMD3r4dlqts2Igms4qQB6zJUm/ljFw=="
}, {
  "name": "U2FsdGVkX18f+ZcPCx4VIT7An6heoxOond+NBDKJJqE=",
  "email": "U2FsdGVkX19NN2OKmFgEc1GmYA6MsyIuGwzdaqEXifnx7dHlyCDtl/1/PTn93p/M",
  "plusone": "U2FsdGVkX18U46nIoC3hdcBuNhk/L2VroBrS5y3oAK0=",
  "secretcheck": "U2FsdGVkX19yLEMCGhUNeZgUYIhV8TuSi9wHmb4faSGfpOvEpKbSLbIiG3Qlt3wm",
  "formUrlCode": "U2FsdGVkX18jmryFSTE1rjEcLGAzbHvABBn6Fjs5fIfNCaBuFgjaZkhyBFjchxpJ4Vq+Jo/L1lcx+U6DSh421w=="
}, {
  "name": "U2FsdGVkX195jSGJWKuVDtSfNiVuLFJWCI/zpAgw4wo=",
  "email": "U2FsdGVkX1+afNsDyCX+NOKm0dsuju7xHCa2S8TeSVOC5b9BFY0CGulJCPR6ZF/f",
  "plusone": false,
  "secretcheck": "U2FsdGVkX1+5SupJz4jXqNQq6vmLkwYJ0GgkrC0dzLFyfMB3i5jJODoBnVvE8i/x",
  "formUrlCode": "U2FsdGVkX1/Nmh4N6TK1L5F7hZfPe1Efaa/6BhiS6j2EoczL5HndKZm/1tyd0o9PfepSYVFZGObRm99HBuCYJg=="
}, {
  "name": "U2FsdGVkX18AdEq0fQ2AGBgNsJ/gEdY6c9beRstEJ0Q=",
  "email": "U2FsdGVkX18jXN8RlDLK4Kpsz3rQE8pU/OTcDcm9z5LUzsJdhQZmnzlIH33kJH+t",
  "plusone": true,
  "secretcheck": "U2FsdGVkX18LC/KyCafo9cbHPh7MNaZVpRM84hRu06BuzKhnrbQLV8yYzgKE0mLp",
  "formUrlCode": "U2FsdGVkX1+2LGcLY/hEjBWYFhV+IW9hYz+st2xoZ59ISiFEIQiCeZEPgyDd3NRqlVD9RyXJjcCIYbvqigbr+g=="
}, {
  "name": "U2FsdGVkX18xteUqkiBOZNXP3+ilMy/GQ81GRGGum66+MlhTcyDBBhODbvkaBYF9",
  "email": "U2FsdGVkX1/x/yGMk+ut77T0ZsYRL/1DF5l3jAbv8H4c8/V+L/WiB4wy9knWIMOd",
  "plusone": false,
  "secretcheck": "U2FsdGVkX1/nJBT6aOFxkjef+ZbGrUx5QA99PKMjeHpS5NqGMZ25JPX/ug3uxwf/",
  "formUrlCode": "U2FsdGVkX1/+k/Ebz8WFT2pGimtGqf8Bcs9gI/BgGq+K0KLfTo1neV5uDTds6tvdO8jlRDEurx+suipXCZepkw=="
}, {
  "name": "U2FsdGVkX19qYe/CoAHCtOwI5u6nyM9d7J1JUvtwSCCTadM+HCOy6niiSgFWDrzj",
  "email": "U2FsdGVkX18O+ZH/z4Sd+H3TNYyLaZP+OiU9QibfPpd+LzjJdKLSZP2st8iZrB5x",
  "plusone": true,
  "secretcheck": "U2FsdGVkX1+/5c9v9KS5kkN/7IthpeX4nbdQjkJtw1g++jnzC3BNeNLOWuwc7wnt",
  "formUrlCode": "U2FsdGVkX1/qrDjvzHSQNYGbzbUZ1vjxacpdZ6P/PKOF9oMur442byoh+QuEw5fewN7l4GKph1qNSqH6gEeJiA=="
}, {
  "name": "U2FsdGVkX19js9JttzQZ42kf5+4DruovC3e+agjV3TM=",
  "email": "U2FsdGVkX19OgsABJw27Vpqj8w9nUYNhLF3scngwgwHnHl++MUnEMutrTJckIQmt",
  "plusone": true,
  "secretcheck": "U2FsdGVkX1/XaUHK2/OwPOpE5BX/oe60URfYI2kkUWosPCekDwOZcHXmu/GrWun/",
  "formUrlCode": "U2FsdGVkX1/rLFNFrDhj5K9blXNa49hsfRgv/ThvJVGiFtezP26tlWWTDdQkbTYT+ln9m9R2L8OiML/609B0Vg=="
}, {
  "name": "U2FsdGVkX19r+0BN3lh9A1xlibXC43QwB3iG7oYjXXE=",
  "email": "U2FsdGVkX19Y/AJa/A2SXlBOChj5/PV37j8So4OEs83QtbTt5j/5iJoaEa9cxr7p",
  "plusone": true,
  "secretcheck": "U2FsdGVkX192dsUtRo7BRFy3wHUrr7kAnI4d0KLHuWns6Thk3Sem2786w3POkjAp",
  "formUrlCode": "U2FsdGVkX1+l2nlLihEFID6XK4GjIlPw4iS3llvqUbBCQHTtL/p2/khQuWUMMob92qzVkC3+D5bIvJFIP/OAzQ=="
}, {
  "name": "U2FsdGVkX19L4q9DTcPELK+VrWbALdBbn55plsQRvhabWhFrFHPlW78AhFTQ9rdJ",
  "email": "U2FsdGVkX19hmRqfQaN1a3VHTWWE1l44aKR1FUkmx0uNQXZLW8NIfAQzT5JE3EQB",
  "plusone": "U2FsdGVkX18LUHf3DUxQZSHeXxCgkgBPAGdHLkTf0v4=",
  "secretcheck": "U2FsdGVkX18Fz/zNyjBrKsYcIzhbnNRRFY7mvxe/h9nE2wQ1rk3pTvsXYvOXC9oq",
  "formUrlCode": "U2FsdGVkX19scsMfGnGFXmhG3ls7PuBnfZSPUET2L3Bf8sb6L9jcy6dFDPWaYDYaGjl/doFm/Z2NmD/ljX5nKA=="
}, {
  "name": "U2FsdGVkX189XDmK+GZtOHyaC4y9K2PPbPMG7Xqyn8E=",
  "email": "U2FsdGVkX18CQq0wZ17gxkzLwuh43uT+4CttlIqfh0P2IyEwwUHSsKi+XNuSAARU",
  "plusone": "U2FsdGVkX1//umReOkk6HHjWQTNK6SDLrmrcyGvCDjY=",
  "secretcheck": "U2FsdGVkX18Ldk3F4s06Acqnx7T17EOLmNpptSq1wMMm94f7Xk4e/e39m+YhS+T4",
  "formUrlCode": "U2FsdGVkX1+8Xhl63BHGMjBP/bpgBDM2se40VgHSjyAW0fe6A9sSsF6Tz5ZpYHMdlxS93Dhr5Isvq6LoKjRzuA=="
}, {
  "name": "U2FsdGVkX1/jI9ZcL5MEDAvzXSvvZ5kFSnSZM9I1Hl4=",
  "email": "U2FsdGVkX1/C5Lr1j046a3MUxHk/VeQZ/QWWDWxFeoW3ozWY6655lLwdZIH2YKkb",
  "plusone": true,
  "secretcheck": "U2FsdGVkX19EAdy/AmgiEQ9b7BA3DnoyL2H/kZ8qeUGPkYMZjVsoscbxtFAZX/8x",
  "formUrlCode": "U2FsdGVkX19jv4vpVxwMrAwfRY6hhGTpR2jZy0hN9xVt4kVjOsAHhoLas5bSZnH1PIQ51qnpJrrCFQivZ6HnGg=="
}, {
  "name": "U2FsdGVkX1/p5leoOx9V+7G1sVp8sibQVrNhSoLmTos=",
  "email": "U2FsdGVkX1/2JM5it09zq2CCZJA+2rYhedkceUZVwhhxKY038d//29J4YpMBrMSC",
  "plusone": false,
  "secretcheck": "U2FsdGVkX1/ua+OJHecd3/oRUibKeYbB40ThkqrPtQozTVyjq6Hz/aQhCoeYiccG",
  "formUrlCode": "U2FsdGVkX18lEd1qEquSp63a82gVK6OhoLErRIjQLEzaEpZEMeZKkmdvwG5ZUnNi25ofmBv1VXkvrZAsLNpXFQ=="
}, {
  "name": "U2FsdGVkX18lDEr1io6yrI6su9dnZF+9jP0996k2NZY=",
  "email": "U2FsdGVkX1/k/koeQS+iqCcsCfYET8/tCuJRXOnok83+zDIrjAuOBqrUd5pRIkv7",
  "plusone": false,
  "secretcheck": "U2FsdGVkX19L7LENE5ePyF2WV6Y0R/LjCsgix6DX+rt/sdp1jmCyzWzgRezXhEUA",
  "formUrlCode": "U2FsdGVkX19RproQFvTOm1lBdn7yja6pO6GZosikY/NzSwmwgHI+iCYqF2IevqoenVVEqxhAEa6amToT0idxiw=="
}, {
  "name": "U2FsdGVkX1+7Aq4S8nQ7p7OH/HIUgEF/NxxPg1OYTBM=",
  "email": "U2FsdGVkX18ypfmFiW9YzxbKLWQkGpcFxZuwxQ+ImWmBI4S6MJSoOFWjWj2F/bbA",
  "plusone": false,
  "secretcheck": "U2FsdGVkX1+htR5Tc6z0dkByhZyJldKaMobROQLwJCzIBN8xH/3sFgjiICFGWNCa",
  "formUrlCode": "U2FsdGVkX1+qv+6pbdjn7uG0fmt6iw0vnv+DVnq7vlxh5/ysEK1RlxnkJlPacw3kOej7jFnb8xZ18YarQMpSRw=="
}, {
  "name": "U2FsdGVkX19Uaj6e3ea6Rf01iLs3tB3nVPv6yrldyi8=",
  "email": "U2FsdGVkX1+2eNKxOBNuvlIb/74KlDJYHFP6pOrXnCa2ah9zg8eE9xDFxlqJQ0Mk",
  "plusone": "U2FsdGVkX18arDynRPtVhbJHxtJgNGMERof1CEGV6AE=",
  "secretcheck": "U2FsdGVkX1/dYdMTWX4otItvPo8ZFYrz+eU6sCStegJyAZfo+DNojefm38rkkj3k",
  "formUrlCode": "U2FsdGVkX18GdBjEZGqclfNBTthmWrTjZDk9tfkhOUCz/BgT/KPdmDyR5ZsaZv2CuvilabcCLwpaIg+HbBucBg=="
}, {
  "name": "U2FsdGVkX1/AjClSj5Nc1N70QEADlM3jZvPdVQr3NzM=",
  "email": "U2FsdGVkX1+HIHMsf70QU88ORzQ8igumFAG4CFh/2zKeOvlcWVQ9tbkOLTIBVWGY",
  "plusone": false,
  "secretcheck": "U2FsdGVkX19gsHcesM0fDB/ixm1hdQbddFrnxCBmA0Lf+AJ9hgZLhFNFyhH4xOGG",
  "formUrlCode": "U2FsdGVkX1/fbsSgsZsXqSl81VMXfcDFdJfZw7n+onzaDNhSzgb7gmr9CpipFF5+Ggk0tqh0rjmoZPZiUf+oZg=="
}, {
  "name": "U2FsdGVkX18cFpvBVxDBqL+NZmNDKLu2+T5MUTB6RDs=",
  "email": "U2FsdGVkX19XUYvu0C1v0C7qPTbXkOeSq5UtKkKvMNiLno/OB9Syxo1QMS42Pnk4",
  "plusone": "U2FsdGVkX18uTk6nP9sWhPpSkBgR1cNBwCw1OkfEF8M=",
  "secretcheck": "U2FsdGVkX186ZMWYPguYroFtgEAreQR5zC57JbZHbxfin5DMdG6q2gGnN+waBdNO",
  "formUrlCode": "U2FsdGVkX1+89DXNlnNz8AUZRnVVn54dEUH6NpeToU1jRvDxDVqhk4lUx2RbVdX4gt5Hdt1yqb8Ob8iy31r54g=="
}, {
  "name": "U2FsdGVkX1/ShiIBS4butdWsdWvKOQOWeqqGJCLbWAY=",
  "email": "U2FsdGVkX198T6DNjFdvl0SGyvFddFKYJfKu/MtCMx0Qwx9I8L8Yl0fNGHvh6oCR",
  "plusone": false,
  "secretcheck": "U2FsdGVkX1+6RS/B/rjvHWvhbFSuaWyRg0hhS/GyR8Cz4qfqlTs/FpgfyHMyexs6",
  "formUrlCode": "U2FsdGVkX19nmIH8+Tlxqfh0npKdtMosYUzSK936RIXXO45Ve5lhAJQnLcrSgcIaskjfwqh2699OGEGeXHhL5w=="
}, {
  "name": "U2FsdGVkX1+UwcXd53pTt1OH/5uwV/JOrpf/2NuTd8Q=",
  "email": "U2FsdGVkX18fr00roQONItPsRiUOYhB9+NuurMICl5euxTdV9kNeEm8rT9x74BtN",
  "plusone": "U2FsdGVkX18jF7DT9UscWLpO3qWlOpMmPGNiaZjpZXE=",
  "secretcheck": "U2FsdGVkX197FN2TNFg+q2a/Ts/ErfmDEkZtzb6st7CvJgaGxdeVYIAFGr9kSeEw",
  "formUrlCode": "U2FsdGVkX19Qyj6h8vimG6TVryA0xOHMxbwQ4t4RqYA/V745G1ITXwkFJ26gyBrFsgm/JKiwMXf02utIoK3KFw=="
}, {
  "name": "U2FsdGVkX181te4oEGUaoofrVatE+1Z/toNxYAkFA7M=",
  "email": "U2FsdGVkX1/nX8IPak6Jhx7HY786aDxDqSDNeIx/7xWftlGjM9oQeltdNEu/Ftab",
  "plusone": false,
  "secretcheck": "U2FsdGVkX19HjmfRJT7LZFrHTNKiyxaqhDGsMs+qi3663P/PybOa1GaTJBMrY3JM",
  "formUrlCode": "U2FsdGVkX1/FG3mKTllrPuZRsO2cgqnxx/3tWj2Qg1EKqUGpy2reoaP0NO6WFIzcUU8yZF+3+ZJv9uvmdf2oGw=="
}, {
  "name": "U2FsdGVkX19A7IM81AkdMcUMnTCuSe6cU/ChkDB6HFc=",
  "email": "U2FsdGVkX197d+YNQxd3eNRhHZCOxBbaokllw9jdcEZq9D8h3DHImmVXp3BnskVy",
  "plusone": "U2FsdGVkX19GNK4yzfQezPm6Iz8HoLCSgVPaONYpRY8=",
  "secretcheck": "U2FsdGVkX19krVStMdfOqiPIE9FFAhznk1Huc7/AEfz2y8mHxDm3KOzml0u9OaEA",
  "formUrlCode": "U2FsdGVkX181SS88YW5xLmvaTfdmuljbccSW2CJvBYlcNVBEc+dHhkDya1t/3XFyW/WW74XmdrjbelBZ3Vv9Eg=="
}, {
  "name": "U2FsdGVkX19JV28QfJ+wgwEynFqUhlC43C7f+JSSuzQ=",
  "email": "U2FsdGVkX1+xu9PF74mwlvBVNcdkDJa9jEMkPkApcobX8EBUVx8/WJWbmdx5PjYK",
  "plusone": false,
  "secretcheck": "U2FsdGVkX18eGrvj69pu/OtZ+q8eoJR7jH8z50oWkfV7mzmGZdXMljhQkEf8TvpM",
  "formUrlCode": "U2FsdGVkX1/58k/kjJiOFDQUj2PcxN0fhBDAYiO27vvlrtucV11G2dgZA9uT17j2JhPsx7ddzNGxHGxyKMVKhQ=="
}, {
  "name": "U2FsdGVkX1+HBnlV340wOiVcn0NEpIQSkLQ13wP2zAI=",
  "email": "U2FsdGVkX18qHHKpcxmiQF0ZDT7whA4IitbVnMdWtLAr1OCMUbun4DdIXoKj3FjQ",
  "plusone": false,
  "secretcheck": "U2FsdGVkX1+Y6AaF/zPCy6RchSYGMiZDeBtAXrjTz2M1uDO1CDDyH9xzQPiysKnD",
  "formUrlCode": "U2FsdGVkX18f0Tf/unRcRNfyIkEhyh3ZWONIU2fyeFlAY3XmMHObugKRh9YmWZ3YQEMgc3+kym693NtIqfaagQ=="
}, {
  "name": "U2FsdGVkX1+aIRtNwllPuVRou1RH70hL8vR49lvuF1E=",
  "email": "U2FsdGVkX18CRecDYgDSlYu1zSJpkxkQ7n5EWBriA6Eoap289mfzD1Mkzwt5vmiF",
  "plusone": true,
  "secretcheck": "U2FsdGVkX1/fJqAt+njVqLUX3t1R83E2zENcv9e6hJdkm9QBY/7otMZtQaQ5Tre/",
  "formUrlCode": "U2FsdGVkX1+2b6YOprqIYNtpsHVeSLCc8mPLcCKmZeLnUQ8HN/+tUK5BlFpEoLPlNLIXVkgcrHAL2DBA/IwEZA=="
}, {
  "name": "U2FsdGVkX18oL6wC1p/uaMGvo50S+kveQStj3omiih8USk6u9HXUCGL1Pu/HlmKv",
  "email": "U2FsdGVkX1+1YNj8jPNrNXZGNlaCcK2UAYit12mbk/yaujXSpD8hqAYuYel2QLMO",
  "plusone": "U2FsdGVkX1+Ss7fllAQmz9BpL/vqjpJRMmkAo/RqWLN0PxdRhtxWuqJ2kddRcnbK",
  "secretcheck": "U2FsdGVkX180QmdUHaJ6/Wg871bZGwmIKpzuhHPr99bpKwAei23N0agA759eFrEt",
  "formUrlCode": "U2FsdGVkX19etrW6w2fVDI7gwpwhaIyOKqRzKHTskyoKABbZUdU94IIidcleUr0doKgNyf+VB1MIBbojvO7nrA=="
}, {
  "name": "U2FsdGVkX1+IaAhIT5fw3NRVo4RFogSXT8WnpwzN5RE=",
  "email": "U2FsdGVkX1/q/3nl5hDTdkinnGaPOAYZVKia2dEt/PxFus5q8Qln1jBfs1K43h0T",
  "plusone": "U2FsdGVkX1/Ire3kpdCLqRHI9JxGi/+EROfLZ4oFuSY=",
  "secretcheck": "U2FsdGVkX1/Yn2JMizAhaVItvEkdJC8K7JYuzbl977RVhAPUN8c7n8JYaqqAiPmp",
  "formUrlCode": "U2FsdGVkX19YMkCQiU4auudKsnw5QNzF+BPzy28rr2nX/4EyMXVZ1d2BwV4VbDQ9bfTWMTTQnot4loBRZWa1AQ=="
}];

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
    name2: decryptedGuest.plusone,
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
