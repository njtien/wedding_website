'use strict';
var secretGuestData = [{
  "name": "U2FsdGVkX1+qLLjMLhypvQ6QaKN5434l11JN0SXedxo=",
  "email": "U2FsdGVkX19x5hPjq6v9SBr/NzsNKnkHt5rOpAoDh2XmIb59FCevvIrdq+jhO7Ub",
  "plusone": "U2FsdGVkX1/yOtWOzkyeuvsa5A5t34CfdTXs3y7EGLSn301+d9juxOLJvZTpOdfD",
  "secretcheck": "U2FsdGVkX18AfmhbjgJDWZTpwJmVb3A/8p7I3fDfU0iOq47KzRBH80hw1/KN4hcM"
}, {
  "name": "U2FsdGVkX1//NnzdVnSUKg2BHuo8xogJLmPJOiTR0Xc=",
  "email": "U2FsdGVkX19j50YTtR5/N52y5aKIgYBePPIcuXavWq6lHMpy+CAYVerWHnIT8vGP",
  "plusone": "U2FsdGVkX19E60Hn8GXePvrTDtjHbucR9ZCLLgFl6oY=",
  "secretcheck": "U2FsdGVkX18Rlpknr8CSCOovGLICfQvpWcLXiSmC6HBNXDr9FyPIap3+R0ZZIM5L"
}, {
  "name": "U2FsdGVkX1+Fz20uVPp1CoEEATitICjcY1Rtyaq86MY=",
  "email": "U2FsdGVkX190uofItHPxGW1/pXB2kzEMEFG2d0g+wo0=",
  "plusone": true,
  "secretcheck": "U2FsdGVkX19StTYRDOqdKfGxmeJzZ0bHOOdRHOg8Uw18Q9NoZbDA272qvJYoWEUO"
}, {
  "name": "U2FsdGVkX1+TZX4pVfiDlodZ0LNRagX6AtzV0RkCm5U=",
  "email": "U2FsdGVkX1/Z/StjDoF0URrrlWeAitHbCy7njgdSVr/MqrBhDKvYc8ljiRYwqFoc",
  "plusone": "U2FsdGVkX1+DdNiVwxz/ZPLzA5n3LE3o88fJrvH1gIY=",
  "secretcheck": "U2FsdGVkX1+F2gB6aEdesd5gK3qZ3edSK5KglfCYwnSf5sM4MDgG8Dgn6/1xb/4s"
}, {
  "name": "U2FsdGVkX18xeBrodefa0JX9Ycl4WX1t8JFSj1vEdII=",
  "email": "U2FsdGVkX19G1f4LmL3PmDNRp/QJ8kxZpaWKVFvvuXL+z+MhwJzhaRD/T5lbexbQ",
  "plusone": false,
  "secretcheck": "U2FsdGVkX18J1VB75j0VNzebusonMkyIY/MIe808+7+xYdHFwQVpKhM6sMhtbcYk"
}, {
  "name": "U2FsdGVkX1/JVgjPU8DZHrGfDu3OjUH6d/dXCmAfdc4=",
  "email": "U2FsdGVkX18C90TMp0yMDaYLOh5uWxC5Bzm8Q/edbW7F+0Ikhnq58JGnxbxVP7BE",
  "plusone": true,
  "secretcheck": "U2FsdGVkX1+CVLmuRz37L47D6wRTy9zLVPNdL56OJo4KrKmYuGfatm0MVOUiE+W2"
}, {
  "name": "U2FsdGVkX1/6koSNma4ePfq1C/20oVW4JbRf3XT2rsA0rn0UTd7F9WJmOdMqUpXc",
  "email": "U2FsdGVkX19ahPxsai3XRrMt1DI2PALvt2eGZ0b8++5vqWu8sCM13uYNd7XwMI+C",
  "plusone": false,
  "secretcheck": "U2FsdGVkX18YizQL/Qb3GfTXnGOoWnTxBxioNpdUmnF7oWFpFeuoqY4AU1rrhbYH"
}, {
  "name": "U2FsdGVkX1+Wl/CVwsTlUNAhIaF5pM7rPdxya79ahmbsylqowhsqPHjU/LDONt16",
  "email": "U2FsdGVkX1+puZEGGjqgIrVfyXBpSd726oP3fqMLTf3k6HgxdPsKX5jdNAxThQTU",
  "plusone": true,
  "secretcheck": "U2FsdGVkX1+4UauVVtI6do4Sjgx0EVvXorvCXiRwE+geNU/ky3vHI2EbDyIuuyEd"
}, {
  "name": "U2FsdGVkX1+rJKIUthMayVuRoX+FYw+ZKCBjpCr4qdo=",
  "email": "U2FsdGVkX1+OhWrxHVjpdK081D3jB4Kz/PnGYgrxEBRo8R/4piAWRcnZKPL4rcPX",
  "plusone": true,
  "secretcheck": "U2FsdGVkX1/vhgO5kigRgxvGMKRy8raZncemtos7+2iwlevbhKYLMuxoT1p/JlM+"
}, {
  "name": "U2FsdGVkX1/r6wm79+8bvV2N6/endjUOxtjiIFTe/I0=",
  "email": "U2FsdGVkX18TcnF23vJ2hHXkDwZGqWSm0EeepUkHTCwLoztZf/Bf85G7b4luukAE",
  "plusone": true,
  "secretcheck": "U2FsdGVkX1+COa8tRxTquJT+v5as0FHstckcDTbh84A5ExNEYSAUPHm0wcFODhTA"
}, {
  "name": "U2FsdGVkX1/9Pl5wzTtByGkzX5trUjr53CpJhJEzEWFt7LfAZez/Q9VgQOhG98iF",
  "email": "U2FsdGVkX1/34hqoAKb8qfduvSFMNDQBcfqD18XNQUtzAAV85k4Ll752Fq7Xtld2",
  "plusone": "U2FsdGVkX1/lleQzucmaqjN4Aa+BPa4tRlhSQx/P+po=",
  "secretcheck": "U2FsdGVkX193+SC83WM4ODXg6jJWTqgMasw7EpD4HJdpUyJiMg3yPZXyQKdmvBt0"
}, {
  "name": "U2FsdGVkX18TharjQeqT7n/+/F6SlO0krNYWnFaa9qM=",
  "email": "U2FsdGVkX180Rlf1cps2/T6/uDGEQzGHaJFfq5TcivsI9jMYrWoImQzk+uRxSlf5",
  "plusone": "U2FsdGVkX1/Qllqaljp5i/rFrRI0/x7dhbf6/Vqmrx0=",
  "secretcheck": "U2FsdGVkX1/Bsg4HhPv1PuTBAIvlWlr4L6TPNvcGYskyJxhX8CMiFrQ36HI316Os"
}, {
  "name": "U2FsdGVkX19Jb3UZw969/aPzdBQjcTi4rtwNTBwEnCs=",
  "email": "U2FsdGVkX18Ynd+86M5HJObiPhrPdEYNq4jyordZloZqINmI6gImry9pN1DSA2p4",
  "plusone": true,
  "secretcheck": "U2FsdGVkX1+dQASQpLln4qpZWT0Zcctnp46xhZG6xWA9CJ5/DSJPK1T9rht21s3p"
}, {
  "name": "U2FsdGVkX18KD1oCNL48lZYnNHdBZMyrn/zxSoVGako=",
  "email": "U2FsdGVkX19tIsCAPAiGO6R/cUxB26BW4VNH4aLHVtv5RjizrUmPj6uLfCwDOEGk",
  "plusone": false,
  "secretcheck": "U2FsdGVkX19PfbUIB7yR2Vee+cz8f0erK+pIG6PxCwr2rBgv8PpiXGSUxQkR+fBa"
}, {
  "name": "U2FsdGVkX18rgxrtBHFHvyIz8C4PV8GMHsbpWlfnafY=",
  "email": "U2FsdGVkX1+8IsBXzGhyz0H/fBzdsE0flrqEvfQL7L+/Xr8z93N/p4pDkErMdKAn",
  "plusone": false,
  "secretcheck": "U2FsdGVkX18iFxZTV9C2Cx0YiWSLBu8QvdjFl/UrS3LJJOFxQIxKwiHMbisid8Q9"
}, {
  "name": "U2FsdGVkX1/jB8OoG8vVUuwKyYdTDI7G4i0+iSM0RLM=",
  "email": "U2FsdGVkX192HmGVO64sTO048gtzAAdSi+dMAG6vgVvALsJwcASixpKuFmle+ivJ",
  "plusone": false,
  "secretcheck": "U2FsdGVkX1/AClIMwGnckqYX53iOt5hILUuV3DtSqYrT7Chb49KDO3oW/2/SaHk5"
}, {
  "name": "U2FsdGVkX1/6fPYRRCTiGGZfnMzzn0C4xX5RIOndG6o=",
  "email": "U2FsdGVkX180kO85Y4Ka5nCpEk19EoxRBBf1AADF7nKbWpvII9gv7BTnPnTq3GoL",
  "plusone": "U2FsdGVkX19ulD4RscY5FGkFj0fG/7tZNzZ/PXS4esQ=",
  "secretcheck": "U2FsdGVkX1/q+uMuUIpEGRkKQbGdyIC7cYl2ltvUv/Mzgz/Atn+ZpUbnZJkT5Fif"
}, {
  "name": "U2FsdGVkX1/23X8ckl2M2iYjoFEDDVef2bmTfS8SAEo=",
  "email": "U2FsdGVkX1/Faq30kRcmtD5YFlMnrr3PEvllv12IzCqOadtZTOmsbcmqAioPqVGb",
  "plusone": false,
  "secretcheck": "U2FsdGVkX1+XAiiYgX1+9epPUtR2NCAqufLxIr93gLJGfNULW1VxQlBg39rWl9gE"
}, {
  "name": "U2FsdGVkX18GWp/rhWNuCdtw6ejBO6V3VUU+9WfAnX0=",
  "email": "U2FsdGVkX1+Uat/sYtOGWJJ//DZ3BC0wt39iP0HMMBR2EBCkrk469KB4uucagr40",
  "plusone": "U2FsdGVkX19fF+bLZofRLEJuxTkF2zepsR4lZT4mKPU=",
  "secretcheck": "U2FsdGVkX1+PsskLWuPtW2fXPpFQTmaCvdcg5KFWjk7haZjOt6e4O3oWgtKZxSjE"
}, {
  "name": "U2FsdGVkX1/1nzhKb4eYByqEH7NS/IYG9B0AUYW97hU=",
  "email": "U2FsdGVkX18DSHTtNbSCzCWNgMOsjHxrjJQfLH3PF+eQqhniRue71mV1vsVjlrJ3",
  "plusone": false,
  "secretcheck": "U2FsdGVkX18Y9HHWd/GHN5PRsfKx+i32q0h4PpaVCVunEpzuHMzhDS+btSaS+n9q"
}, {
  "name": "U2FsdGVkX1+gvJKKsh5e+sbzrZuh2Xa77Bkzst6wr8U=",
  "email": "U2FsdGVkX1/4WwUzZh4pugRTaYCVMCD8966pfKrP0m/o4N9CNQkAuxwDz1VFtUBl",
  "plusone": "U2FsdGVkX1+fkeSavSU6+w4D+yYyUZ6EvfvSmF+LI5A=",
  "secretcheck": "U2FsdGVkX18ayOICU3gSJDyCIbcn/IrYoRf228czUbvpf6u8DmX18OhOxp0zUl3/"
}, {
  "name": "U2FsdGVkX1+Dnge3z3Hwv2eRQLgdnHlze4M1ELfaqhk=",
  "email": "U2FsdGVkX18tmnQ+xD/u+h6aV17zGR+wKX2VfWTFykv4/qGduvoWClF4XhgQNN4g",
  "plusone": false,
  "secretcheck": "U2FsdGVkX1+Nm3B4vbc+GIXZYOTpcIL7wEyhAnRQtbJU3RkFkAzn6QC3IazxVpQQ"
}, {
  "name": "U2FsdGVkX193Gw553fBD1pqoaP7EQqYUFubMRo4cbkU=",
  "email": "U2FsdGVkX1+eH4WVFnyE0jqzYyk43xJT4oXcwVi9FnQxhnlhQUeGuMM5+VopmRDG",
  "plusone": "U2FsdGVkX1+3RmJ92Q5ibxVF/ivHzW6Lv2Xw29Wi5pc=",
  "secretcheck": "U2FsdGVkX1+HKQUTNaqlB9HjOiCZgTM/morgTxrxcYnnQ/S62AV0wGwQaKmwnvI8"
}, {
  "name": "U2FsdGVkX1/7ctJeZedoyRBinc3T6Fa5cIXBFB8TsL0=",
  "email": "U2FsdGVkX1+fVlJ7/z1ifZK3yyBZZf7DHpJQgezJBm3XD9Segkibw7LGh1KuFrnO",
  "plusone": false,
  "secretcheck": "U2FsdGVkX1+7r/FKihljYYTOoK7jiYQkuQyNCymvZJ4cAsZKxCzhLEu61l+FSNTe"
}, {
  "name": "U2FsdGVkX19WaPbz4UcmM0uEFHZKMzaVxnIj4dGt17s=",
  "email": "U2FsdGVkX1/TFXRzvWTJdVlxlR4zn0FNzjfcBL1gzf3J9ISCEPLElffMqoyw1UxP",
  "plusone": false,
  "secretcheck": "U2FsdGVkX18O3s46YrE73ZuWU4yK/frs23zb9iocvg7t/ncnsExQXWxby1fi53Wk"
}, {
  "name": "U2FsdGVkX1+eAeZ1TPFUYhIb0+N7RZK/bDB4q2jE8KA=",
  "email": "U2FsdGVkX18xNC0EbEwy8QJQ+p7IvFk1zpJR+pbxbvy+wqxpGnyZiXuW7BkpOZ3T",
  "plusone": true,
  "secretcheck": "U2FsdGVkX18+bmBQVcelBp/mLYYr944JPNsjrx4GIcHG5nGQq4gPFq4BifX14uJz"
}, {
  "name": "U2FsdGVkX1+CZKjO+qboXyL1qdGMAn3wJaNU+pRDTFrV4okDz0hkDeUnFg7xBaSo",
  "email": "U2FsdGVkX18QW4iyhKYc4yMSDBl43+y+DfIS60bVAbHxQ3OkSp7C74r/FEOS7fd5",
  "plusone": "U2FsdGVkX186CliVhvKHXZL4xabG8HtgEO29KEuE9qOq83upug2bhJ1dxlmCeSQF",
  "secretcheck": "U2FsdGVkX1+YO31ep2lVLwfQxuKpVvQuxrY8PGo48oTjuAAPL94IHfN2MfoPQLkG"
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
