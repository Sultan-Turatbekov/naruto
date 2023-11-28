// const container = document.querySelector('.container')

// container.classList.add('cardInner') // classlist.add(classname) - добавляет к сузествующему элементу дополнительный

// container.classList.remove('cardInner') // classlist.remove(classname) - удаляет класс с элемента

// function BtnClick(){
//   container.classList.remove('cardInner')
//   console.log('clicked')
// }

// function BtnClick(){
//   for(let i=0; i<=100; i++){
//   container.classList.toggle('cardInner')
//   container.classList.add('cardInner') }
//   console.log('clicked')
// }

// var colors = ['blue', 'red', 'yellow'];
//         var currentIndex = 0;

//         function changeBackgroundColor() {
//             document.body.style.backgroundColor = colors[currentIndex];

//             // Увеличиваем индекс для следующего цвета
//             currentIndex = (currentIndex + 1) % colors.length;
//         }
//         setInterval(changeBackgroundColor, 400);

//         const arrColors = ['red', 'blue', 'orange']
//         let iteration = 0
//         function BtnClick(){
//           container.classList.toggle(arrColors[iteration]) // если есть то удаляет, а если нет класса то добавляет на элемент
//           if(iteration < 2){
//             iteration++
//           }else {
//             iteration = 0
//             container.classList.remove('red', 'blue', 'orange')
//           }
//         }

// const $Adil = document.querySelector('.Adil')

// $Adil.addEventListener('click',()=>{container.classList.toggle('red')})
// $Adil.addEventListener('click',()=>{container.classList.toggle('red')})

// const input = document.querySelector('.input')
// input.addEventListener('click',(e)=>{
//   console.log(e.target.value)
// })

// const password = document.querySelector('inputName')
// let typeOfInput = 'text'

// $Adil.addEventListener('click', ()=>{
//   if(typeOfInput === 'text'){
//     password.setAttribute('type', 'password')
//     typeOfInput='password'
//   }else{
//     password.setAttribute('type', 'text')
//     typeOfInput='text'
//   }
// })
let shinobiWorld = [
  {
    name: "Naruto",
    clan: "Uzumaki",
    gender: "Male",
    rang: "Genin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw20edd63c/images/funko/upload/60926a_POPAnimation_Naruto_RasenshurikenGW_GLAM-WEB%20-%20Copy.png?sw=800&sh=800",
  },
  {
    name: "Sasuke",
    clan: "Uchiha",
    gender: "Male",
    rang: "Genin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw9c745d7e/images/funko/upload/72072_POPAnimation_Naruto_SasukeFirstSusanoo_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Sakura",
    clan: "Haruno",
    gender: "Female",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwaecbdd7e/images/funko/upload/JKPP0004_LF_FUNKO_POP_LPP_ANIME_Jujutsu_Kaisen_Sakuna_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Kakashi",
    clan: "hatake",
    gender: "Male",
    rang: "Sennin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw86c3e534/images/funko/upload/60401_POPAnimation_Naruto_Kakashi_wPakkun_GLAM-1-WEB.png?sw=800&sh=800",
  },
  {
    name: "Orochimaru",
    clan: "",
    gender: "Male",
    rang: "Sanin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw8cffaaae/images/funko/upload/72071-POP-Animation-Naruto---Orochimaru_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Madara",
    clan: "Uchiha",
    gender: "Male",
    rang: "dancer(died)",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwc17a875f/images/funko/upload/60710_POPAnimation_Naruto_ObitoUchihaMasked_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Gaara",
    clan: "",
    gender: "Male",
    rang: "Kazekage",
    vallage: "Sand Village",
    image:
      "https://images.goodsmile.info/cgm/images/product/20180625/7379/52816/large/2d7027ed961d09b0cc175079f4802348.jpg",
  },
  {
    name: "Yamato",
    clan: "",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://ru.myanimeshelf.com//upload/dynamic/2012-01/21/2101.jpeg",
  },
  {
    name: "Jiraya",
    clan: "",
    gender: "Male",
    rang: "Sanin (died)",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw28b13869/images/funko/upload/66477_Naruto_SageModeJiraiya_POP_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Guy",
    clan: "Maito",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwd5fab42d/images/funko/upload/66328_POPAniamtion_Naruto_MightGuy_Winking_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Sunade",
    clan: "Senju",
    gender: "Female",
    rang: "Sanin",
    vallage: "Leafy Village",
    image:
      "https://m.media-amazon.com/images/I/51Dc2JZ+iwL.jpg",
  },
  {
    name: "Hiruzen",
    clan: "Sarutobi",
    gender: "Male",
    rang: "Hockage (died)",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw9d24dc36/images/funko/upload/63300_POPDeluxe_Boruto_HiruzenSarutobi_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Tobirama",
    clan: "Senju",
    gender: "Male",
    rang: "Hockage (died)",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwde4dfd86/images/funko/upload/63299_Naruto_TobiramaSenju_POP_GLAM-WEB%20(1).png?sw=800&sh=800",
  },
  {
    name: "Killer",
    clan: "Be",
    gender: "Male",
    rang: "Jinchuriki",
    vallage: "Clouds Village",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRUVFhQZGBgaHB4YGBoaHB0eHh4dHRkZGhkYHhwcIy4lHB4rIR0aJzomKzA0NTU2HCQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJSs0NTQ0Pz02PTQ0NjQ0NDQ0NDQ9MTQ0NTQ0NDQxNDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABDEAACAQIDBQYDBAgDCAMAAAABAgADEQQSIQUGMUFRIjJhcYGRE6GxB0LB0RQWUlNicuHwM4KjFUNUorLC4vEjkpP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQEAAwACAgIBBAMAAAAAAAAAAQIRAxIhMUFREwRhcYEUMpH/2gAMAwEAAhEDEQA/AOzREQEREBERAREQERED5ExGuo+8JhfGqDYdo+ErNohONuJpfpTdAJ5qYxlFyBI71MlvxNBcax5Cexiz0Ed6mS3ImpTxqk5TobX6zMKynmJMTE/JjNERLIIiICIiAiIgIiICIiAiIgIiICIiAiJr4nEKgufQdYHnG4oU0ZjrYEgczaV9dqGoM2a/gOHtNouCxc3JPU8B0A4WkLvRtdsLRU0gFLOEFgNBYljbhwFvWZWra3zi0TEJKlXY8KbH0M+sKoe602Fxrpp85k2ZVDojGqz5gCTcjXmLC3l6SZFJQLngNbknh5kyv4f3OyIPxT90/KeatGsV7vzX85JLi6ZFwGI6hWj9No2BuNSVGhvccRbj/wCxLfij7OyOFCrbu/NfznpadX9j5j85vfplMfdcf5H/ACmXD4im5IU3YakG4PsY/FH2dpROHFQZiabXJ5j2ipWcGxRh6GTvwh0+ZlO3z2y+HW9FyHBsVIJHANe50t5SPxfUnZI1tp/CtZtenG/haTuExOdVJGViLlTxEjEq5lViL3AIvra4nljYhgSCOY/Iya1tX50mYlPRNfDVw63HkR0M2JqqREQEREBERAREQEREBERAREQEr21q2arl5KAPU6n+/CTlaoFUseCgn2EqWHcuS54k3MgbySs78VMq4fS96mo8LWJ9LyzIJVt/lIXDMBcCoQ3kQvzsDJglP7OVFt8MtlsNW0N9RylkQZlsdQRYjwlYwO2cNkQKQlgLqxub+Z4yWo7bokd9fcfnA9YnC0qS5meoF4BVZvRVVdT5TSqVAoVqFGrnXMyq9NgHLWzZmI0JtxM3MTXo1VA+KoKsGUhhcMNQeOvlPoxB/wCKT/6qP+6BixGLr/EyXSkCbIzIz5j0zBgAfzm3hcI4YPUqBmAIAVcoF/UkmazZGKmpiFcKQwUZVGYcCbEkzO+1aQ/3ie4gSFSULfvEMtNxlNywUXC5ShQEsD3r5rjppw5y3rtiif8AeL7iUffXFGopVWzFqmUWbslCoC2X+a1z19IRK1YX/DT+VfoIqTMiWUDoAJjcSJS87Jr5apXkw+fL+/GWGVJUKVFcHQEEjna+stsQEREkIiICIiAiIgIiICIiAiIgR+2qmWjUNr6WA6kmwlZw+IVFGchfMyY3wqlcK7KbMCuXzLgc/Amcsp0xVcvUJcnUBjcAchaZ3v1acdO0r2+8GGTQ1Vv0BuZrvvVhmutncc+w1ve1pU9qY1aK5VAQAZnKgA24BR4kysPteox7JyDkBx9W6ytb2tGr2pWs46U21cLxFCp6XH/dGH2xhXNhTr36XqfnKJszCYmsexVa/i5H4yXxuz8bhlDVk+In7Q4jxDrqD53l5mzOK13yt/6fh/3Vf/U/OfRtGh+6r/6n5yA2btcMqlmujd1z80fow6yV+KJz25b1nJdFeKkxsNz/AGhh/wB1W9n/ADj9Ow/KjV/5/wA5oviVUEswAHX++Mrm2ttkDgQG7iA2LfxOeS+EmvJeZLcVIhZn29hQcuStfoC/52melt3DCzfDe44ZgxPzvKTsvA4zEapZF5ZVsPfj85l2xsfG4Zc71mt4N9RN9lhlV5XerDlst2B/lNve1pnXbeHbQVFv0JH5zklDbDhhnN9dHGhHibcRLdgsT8VCHALLo2g16H1/CZ3vasbC9OOtvE+1pxGJBsyG9uY1ln2dXD01YdLH00nIalLI4amcjX4roPUcJ0ndKtmpspNyG15cR/SW4+TsrycfVYIiJqyIiICIiAiIgIiICIiAiIgUvfLFFq1GhfshTUYdSSVX2yt7ykYRe1LZvuuTFUXJCh6ZRWbuhlZmsTyBzAesqmGazkeM5OXdl1cMQg96Lk1PB0v5ZF/E3kFTaXnamzixzoM1xZ16+IHPTS3lK4+yV+4cv8JvL0tE1jFb1mLTrWwu0HQ3ViJJ1d7MQyFC5IIsRNZNlm/dBH803Bs9GKgIAf2UzMzeZPD0E03FM192JUK0HubZnuPLQH5gzdpY+lwKoT5iTOzNiqBmqKCbdlDYqo8uBP0mSjh0Wo+RESykHKAL9eHGY25Yj03rxTPtCLjkLKVVB5ESB3hc/GD8ioy+hNx9Jf8ABYGiyf4SX4HsLr8pC7W2AVvlUunEAash/ESa8sTOSrbimPSCwu8tdFCo5UDhaYMbtmrV77s3mZtUdnopPZR/Bsy/SeK2zsxuEVB4MSPnczXWSEqNprLnu2G4Hj8NM3mP7MjMLspQw0ztyA1F+vjLPs7AmmrM3fa1/ADgPmZly2iIxrxVmbawYhe1J7YuKKYtLHst2GHUHu+zEfOQWJN2A8/pJTZIz4qgosSpUsVNwCoLtr4aCZce7DTlj26ZERO5wkREBERAREQEREBERAREQKP9pjBqCpa5Bzk8wLFdPO/ylFwzjsEcMi/9IEvW38G7Gu7qcguc3LIvAjrpbQSk1KQQrlvl1tfzvb5zkvMzM66eLxiYwz6TM9BH76K3iRr7zSw7aTcVpz+nZ7eU2bR/YHqSR7EyQw2HAFkRVHOwAE1M038QcqKnv/fnJ2Z9s7eJiIGIHA38ZoPgNSVcrfiOMzhptLhWPMQtMxHtr4aiEHEkniTNtEzDQ3PMc/6zDWpleNvSYQ5GohE+Y2GStQRtHRW/mUH6zXOzqP7tPabuLNwrdRY/hNbPI2YIyY1qvtHD07j4lNbcQCt/Ky6yExe8QdxToKWZjbOwsqjm1jqbDXlIqpsSu9R7JlBdjmY2Fsx16/KbezsMlJwlM53OtWpyVR9xfM2B/u3pT+n4aV7ROzm/tDhjm5bW65kb/aUAu9j0P0kp9ntQJXyhey6lQx430b0va1vKRSLdmJ4Wt76Sd2XTFl+ELurAgDjcEcek462zG/L52HRYiJ2uQiIgIiICIiAiIgIiICIiBAb4hjhWVQdWQNbkuYE/QD1lQwuwalZTlU2GoJ0FxyBPGdNiZ2ps6tW3X05IaTISrKQRoQZ7WpL5t7ZZq5GRVJBswOhII0ObqPxMhsVuo1uzr5EfjaYX4p3w6qc8Z5QNCqM63ItcfLWTTVVPQyv7Q2U1IkNUVbC5zqwsDwJPC0gcXtSjTUsMRTqWIGWmxLam3MAW9Zn0t6xaZrbzq+h1HACffi+M5/S2qzC6U3b/ADKB75pkXH4nlhz/APosdLKzEfa+fE9fOegw/ZX2EogxuJ/4f/UX8p7/AE6uLlqSqBxJqf8AjJ6SjI+1zxtUZDqORHvI0VZBbHxj4pgtKmGYkiwdb6XJ71tLC95Yhu/iv3DejU/xcSOlp+F63rWM1UMQK9V3QM5XOwteygZjx5SZ2Zs34a5VF2PePXwHhLFR2FWVSz020+4Mhb/lYiTO7uCJzM9LIAQEDcT1Yj2t5GdVr2vEUzIc8RWkzbdlXMTsCqlNXy3XvNbiOhI6Ta3TBTFfwurL6izD6H3l9mpRwFNWzKgB6jx42HAekj8WWiYlSb9vbciImyhERAREQEREBERAREQEREBERA+TXxeJFNGdjYKCeNr9BrzPCbE57vBi3r4tqF7IjBVHiVBZj1Op9pS9usL0r2nFS3jweJxzmpVqKAO4gvlUch4nxOsp+O2I6HIV7ROhHC3My+7WqVaTFaifCAa6VEXOpH7L37wPhlI1sDPWG2c9VjUKgLl7Pa01sezmAa3gQCOGvGcm3iXozx0isT8KXgdhYhdULL5G0seDfGUx2kVx/ELH3WWTD0Ctrgr5i31m8UZhoxI4X4DyHX0le9lJrTNlT8Ttx1GuHIPLtf0kVVwuJxLAuCicQguPVuvrOoYXYQ7zLY8iePtyjEYYodUstgLjUcQSzDjw0mkd823pha1dyrmVbYxGU0syOutgbE2+8jDUN4S07pb8Ym5p1qL1QtgXUEkGwJF7d7wN/STlTZyVAjGy5jbjbrwPI2EkKGCamzMiq6nQC9reRmkbHmqk58pnDbbw7qpFVBm0CsQrX6FWsQfCSQlCx2yTUVg/YZmBQp3k4k2PlykzulhGoq9M1HqC4YZrHLfQgW5Hj7zWtpn3Clq1zYlZoiJdmREQEREBERAREQEREBERAREQERED5IDaWwA1YYhCFfTODwbTLe/I2+gk/EiYiUxMx6V7E4JyjApfQ9Dy5C+sr6Y9jcUwEXIGBsMxBNr35Sc3l3tpYMlWR3fLmCqAB4XZiB7XPhOYDfRWZm+DlGpshOgY90Bhrz6C1/ATn5p3xWf5dXBSZ8zCz4uq10DOxB4XJOpF/qDLXsRVdFc98XVr8QVNrD9kcDYdZyb9bEqsqNTZAGzK3eItqt1AvY8DbrJv9ZKim1GpYMblSgIvYXOY662Glplx7Wds6bcFuWMq6bUmjtF+xlHFyFHhc6n2vKE+9GKzG1RMqi5OUC56AEZj6ATXfenEtZyEFj2RbtXI6XPLn4za3LExikfoOX7j/qzbZRUfs6WS/qSRfzsPnNXD1XXKKZe6rwW5vzJIHHnKdX3oxHxCHQMvZztbVUBu2oNhpfjOrbl2eh8dTdapuuhBst1uQRfUg+lplFJtbx4hHJE8Nct5RdPaLgA1EubdnTKSP2jf8Ju7H2g3xMx7rdkjkOh8wefiZvb1YcGmH5qbHyP9be5kBsI5gfMidMRNfGuOZi0bi/RMOHa6KTzAPymaaMyIiAiIgIiICIiAiIgIiICIiAiIgJ8n2fCYFV332SlSi1Y02dkAOVWy5hfgWsSALnh1PmOXbn4BKr4liFQ5wch7qBixsoNza+nWyzo2++8wp0jSpMRUfQMLcLjNlvxNtL8BfynDqruHcoxW4KEqx7V+IP7XX2mHWO858+3XSLRwzaf6dPbdyg97BCTxKkAnztxk1h908MUFkKm2tmI+ht8pyHZ+xwBnOh68PpJbDbexFLRK76dWLj2e806wyrz3r6mXRf1Oogk5qmXkoYWHra8+/qlQ5mp6sPwEqmA38xC6VESoOouh/EH2EseC37wz6Pnpn+Jbj3W/ztI6V+lv8nk+5aO1t18gz03LAalWsfHpbSdE2I1M0Kfwr5AoAvxFuIPj1kHh9r4eqOxWpt4B1J9Re4mfAVfhP2e63eA4D+LTpJrER6UvyWv/ALS2968QEw7A8WIA9CGP0+cr27anKT6xvLiTXcKvAaKPDm3rJvd/Z+UC40Gp8+Q/H2j3KvqqepJlVR0AHsJkiJdQiIgIiICIiAiIgIiICIiAiIgIiIHyQe2tohVax0Gn8x/ISTx1XKjEceA8ybD6ynbYUu6014Ktz5n/ANSJlasbKn71OztT7BbQi4vdixACC3Dhy6iZMfuITQR6X+Ki3dL3DX1OUn7w4eIHWTP2nYUUqGFeiLMpKgjoyqc9x94FRY/xSsbG3xxNNTnqZ8trK6g3HPtCx+srWuTMtb8vakVj4RGIdguQqVI4i1jfxB4SPVT0nYqeLw2PpZ8quPvBu+h6dR5jjOfb07K+FUZaGdQACSePaFwAeOWxBv4yZtkeVOPjm9shCLTbkp87G09Lp5zx/t7EohRgjXBCuyAuunEMPxvNvYFJ8YSgyCqBmAJtnF7FgPA8Yi0StfhtSNlqvTDd5dJK7mVHXFgIDlZGVwOS2BBP+YL7yZwm41dj22RF5m+Y+w0+c9ba2hh8DRahhDnqto9Tja3iNL+A0GvOJYwveydlsWzsPU/h1Ms9NAoAHATDs/EfEpU6gFg6K9umZQbfObUmIxMzpERJQREQEREBERAREQEREBERAREQERECP2wP/jLE2AIJ97fjIrBYEuz1AAQTYcOWX+sn8RSDqyHgQRMWz8IKSBBw1PvIxMSru81cU6VCk6hs7MDcBlCqrNY+mX2lW/VvB11+KnZU86b2HkVcGx8LCZd/9t0/0hVBZjSSonZtYO65SeOpWy/MSo4B6WSkHqr/AIju6m+inIBy10VuEpMzE+HRSnHavmclNbWwOH2cgqoHqVWOVFZ8o8WbIASo0053HnNDaX2k1KlJkqYSiW7obtC2mltbgjTnY/Xo7bt4fGUqVRibstwynQqdVFjoNCJRN890PgMRTUulVeJFsrKTbhxNj4fKRbtH8L8EcU5HyreBqjFBQoUVB90EC9wQeye8LX4deEndkbFoYhTTVylamSyOF4hjc6aEgHmNdfaA/wBjfCCsc6l75HGgUiwJzdb6aflOp0sdRpbOTGVVUVCqIzqgzs+cKTpqbkFj4XkUjz4bfqrZTJU/Gbr42xHxRVXkDUP0e0w7K3SxDVUWqFRSQveVib8hluOF+My1d7mFWoyV3dCpyKaYyhrjLfMQbDXha8ybpb2v+kK+IYuoVlBIUFSzDtBV0FlFv8xmkTLhmkRG67HRpBFVVFlUAAdABYCZZhoV1dVZWDKwuCNQRM0szIiICIiAiIgIiICIiAiIgIiICIiAiIgfJBb07ZOHp2RWes9xTReOlszknRVW41PMgc5Oznn2hYfHmvTbC0S9P4YDEBSQ+djaxN+GXlaRO54TXN8qXW2HiHJJCKTxu9zr1sLSKxWyXpd8cTYEG+ss2HwW0279GqnHgikG+tjNSrsPa9ckGgSpI74ppbKRY6kEHSZVi++ca2mmeNdK+z5m/QkRjcozIPK+YD0zW9JZ5Dbq7MbD4dKb2zXLNlNxc8dTxk1NmLVxeBp1VyVEV16MAR6Tnv2uVFSlhqIyquYtlGgAUBV0HKzNOlyA3j3Uw+NymsHugIUq2XQm504GRidl+fRV8D7GT272zHqnOr5Aptcanhc2Ev8AiPsnwx7lesp8cjD/AKR9ZpH7KGU3TG286R+oqfhK2ic8JrMRPl72WtfDG6YtyNCyVFRkN9BoArAnqD7zoGy9opXQOp6XHQ2vby8ZQcV9mtdzc44ch3H5cPvyy7m7rtgVqhq5qmoVPdKhcobQXZr8fDhFa2j3OrXtWfUYtEREuzIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH/9k=",
  },
  {
    name: "Minato",
    clan: "Namikaze",
    gender: "Male",
    rang: "Hockage(died)",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwf6c0b0d3/images/funko/upload/NRPP0007_LPP_NARUTO_MINATO_NAMIKAZEFRONT.png?sw=800&sh=800",
  },
  {
    name: "Danzo",

    clan: "Shimuro",
    gender: "Male",
    rang: "Hockage(died)",
    vallage: "Leafy Village",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYZGRgaGBocGBgYGBkYGBwYGh0cGhoYGBgcIS4lHB4rIRgYJjgmKy80NTU1HCQ7QDszPy40NTEBDAwMEA8QHhISHjQhISw0NDQ0NDQxMTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0Mf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABAIDBQEGBwj/xABFEAACAQIDBAcFBQUGBQUAAAABAhEAAwQSIQUxQVEiYXGBkaGxBhMUMlJCwdHh8GJygpKiBxUzQ7LxFiNTwtJEc4ST4v/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAJBEAAgIBBQEBAAIDAAAAAAAAAAECESEDEhMxUUEigaEEMmH/2gAMAwEAAhEDEQA/APp1FFFc5uFFFcmgDtFcomkB2ilcdjrdlDcuuttF3sxgdg5k8hqa8JtT+0neuGszye42vb7tfvYdlNJsTaPotEV8K2j7XYu7q951B+yj5BHKEOvfrWT/AHvdLCbj79+dye2nsZO5H6Lor4bhvajE2CDbxOdd+Qszr+6yXAGXuA6jX0j2T9srWMhGhL/0E9F43m2Tv55TqOsa0nFopM9TRRXKkYUUUUAFFRooAlRUaKAJUTUaKAJV2uUUASorlFMANcmio0wJTRNRooAlNUYvFLbR7jmERSzHqAnTmatrzH9ol0jAuo3u9tfPNH9NCVuhNnzD2h25cxl0u+4ytpN6ou+V4ZoGr79+7QDGlsqnNoSQoDCdIkxPR3jU7+6qsSG3AxPQB3Qg1Zj2+gIpQ3tZ3KBCjjA4nrJ1JrdIyY1iHgfL26azr+XjVVnGQdCUPOSn9QNTuYsFulLZhJMAangASPLuruCxFpS5dFuHIwTMSF6YjMSOlKgkjrjdGoBa9zowQGIPz5p7ujoR161XZxBUgqSGBBUzDAjUMjDiDqKSsOV3SYOuhgr4dlTN0NpEZpOm4ETqPCk0NH332K9oRjLEsR723C3I4z8rxwmD3g8Ir0lfEv7LceVxSZZzPKXBwZCCyNHNWTfybtr7XWMlTNEwooopDCiiigAooooAKKKKAJV2uCu0gCiiigCE0TUZomqEdmiajNE0ASrzXt+s4NjwFy2T/MAPMivRzWT7V4c3MHiEUS3u2ZRzdOmo8VFC7EfBrzKUJ1Ghif2t/rVey9jXcQf+WjMoMMwKT1xmZQfGoY/EZlULGoWAP3VJHbNe29ltkulgvcxD2lALZUCQq7zJZWk9nnWzeCFG2L2PZB1fMmCe4IEC/etKoI3sVRyX7JArTwnsIGfPdsOTM5Fe3aTs6Jd4/irc2VsnEMma5i8SpYkqg9zmVPshz7sy0amNBMaxJw9oW8VcZ2w+NviwhyNcZszNcBhvcpaRc4noDXVpiobNFEY2x7Cm9/hWLOH/AGluu5PWVCDXvrw2D9l8RcxBsFCrKSHZhCqPq4ZhuiN8ivWbLvJdY2j8ZiGXKXL4lwQGIUTbzAwJkiCQBrXtdm7HsWZe3aVGYQW3sVmYZjJ4AxPCs56uw1jpbjx39n+zDhtpPYY5otMwbnoB/wB58K+rzXncDsNfi/jc5ze7NrJGmpBzZp8or0E0t25JmclUmic0TUJommInNdmq5rs0ATomozRNAWSrs1CaJoGTmuzUM1E0gLJoqGaigCnNRmqvNRmqiSzNRmqrNRmoAtzUBqqmiaBnye1scYba162FhHts9scAjspheoHOv8Nbd4s+IsWV+RXD3OsqrNbX+ZAx/hr1u2MKrpnyAugORo6QBIzgHkQN3UK8pgNLyk7298x1ncbaJ/QF8apOxpYH/aXGsFWxZbLdvSM0xktD/EuTwIBAHW3VTL4QJaS2ipkChcjAEEAcAd+gMjj6+btJdv37uIRlUBvdo1xSyhLRhuiCJl8x38uVaIfEXOib9of/ABrgE8Ok1zTuM1hq5xdHTpKs1ZvYLAogGREt69PIoExwmB6fjTzUjgEZNXYEkQ0aSQTDxwJEeVNPdHOubL7NnS6GMEdD20zmpPCAgEnSToOMddMZq64r8o4Zu5MszV3NVOau5qsktmjNVWau5qBFuajNVWajNQBbmomq89GekMsmuzVWcUG6BQBdNFK/EiiigFvixXPixWRmomix0a/xYo+LFZE0TRYUa/xgrhxgrJmqTdb5gBkicxJzdoWN3fTSbE6RtnGaE8uWtYuMuI5n3RVuDbt/GIp/D7QS3ZRzbe4z9LKgGgO4mTppFVN7RqP/AEd3+VT6GhrA4vODJs7OIGW2oC66AwNTJ0HMk1PDezzAg7o3dNzE8hMCtj/iCx9tMnW9t1HiRFM3tq20UOwQKflIE5p3BY391ckmn9O1b44oWtbMP2nHd/vV62Ch6JmeLDXu5VD2c20+IfENlAtI6ogKZWzBQ1wtPWwEdVObKx73LmIbT3aOLaAAQTbUe8aYn52KwforWOlWbMJ6t2qO2MzHXxpN8ZBI5GK9HnzCCK58Ih+wNeoVp0YnmzjaPjav2xs4J00HRJgjlyPZWVRYD3xtHxppKahdBKmNDFA6ND4w0fFmvLYLajK2W5qunS4jt5it4GgTVDfxZo+LNKV2gKGvijUGvk1RXaAO5jzorlFAFU0TVc0TQUTLCiaXxLaRXbDyI5VW3Fk3mi26xjQgHhInyqrHXQLTn9k1xzJ7P0aR2y8WmHOAO/StIqkZyds03zqiKiroiAlmIA6I4AGfKu4S3dDZi+Y/SqhU85Ynvrm0kloNkXFGgPQJHA9F45cDWhs/DBEACBJ1KiNCeGmnhUaslGJppRcpF43a9/KlsSUtI1wqoW2jvoAIEFmjlMU5FZPtBhHxFo2UiHdBcMxFsMGcA/UQIjrNccI7pUdkpbYnfZ5vhtni9c+Yo+IucyzzcIjnqBWvsHDGzhkV/nCZnPN3l3PezMaS2mBeQWiURc6GAxJYIwfJ8o0OUAxOk07exhKlSokiNGn1ArsZw0a1pqtS5A7CR4flSGAuAqBOoAkcR2irHuZbjLwZVYdvyt6L41EikN4m2HUjgRXj71soxU7wf0a9fYfhWR7QYXTOOGjdnA9330hoxJomoZqhfeEY9XrpQMpsojmGUEZSO6aMGGtsbTGRvQ8xy/XXRs1dC3cO6mcWuZVPFW07D+YHjVAXTQDVQepZqkVFs0TVWauM9AUX5q5SvvKKB0RzUZqrooCiN7Vh2ULpUlvABpGYkQJkBeJbTefxqk3jEQOe4E+PKt10ZvsvtrWbtqc9lPqvIPFxWns64uYZtxPONahtSwDicLA097InU9EFvuqrwQ1TO4h3F1zbdXhjmtPII60aJAPhTmH2q8Q2HuZuOUo4/mkVmY5iWzlC4BOS5aKrcTUypVt/EeoosbUKqxIugaS12BrMBVRd51O4a9dYa9VTX8nV/jLLf9HoMFea5mzIyKu8sRJ6gBupO7jWa8qIOgoJIjfwBPWT6Vy5jxZtM12VQasx0JmAFA3md2mpmKaW1kY3CjKMmkeMsQdO/maUI7cIWpLdl4/4UYnGs91Fy6J0z2/KvqT3U3idoKy5WXfzq3DWwua4xDl8uYiNIEBVjhvqz4VHbNGm4aRWjZjRWllWAKPBHAkx3HeK4+MYOguaFZE8SrDq36hTUruzyNUNUYZ5ci4sjcJ4dYNS6ayUjcwzTBBkcxTWKtSpU8RB76wUdrZzpqp3gnTv5HrFa9jaNt10YA8VJAYHlHHuqaBnjG0JHIkeFI4y8WItrvJ1pjbV/LcdU6TFjAGsTrJqrA4XIJYy53n7hQUOW1CgKOAq1NdKpDU1s9JaeAEmgBdxBI5E0TVNy7LE8yfWjNSGXTQapD1LNQBKKKjmooArmhRJA5mq81czUAXfBMTLSOr8akcGAxzagbuE9sVo7Kx1tiFvg8s4Jj+IffS2KhHZVZXWeiy6gg6yY5ca2i7RnLDIYHDD5mgKNxPOp4lQb9hgdxuGRr9hh99RF5LrFDuCyp4jgTpuJrG2bhcU1w5TbZwHVM7MFgkS7hROijcNT1b6csIlZlkfxeCDMWZiAYjKcpzDTMCNxgwewUol21aLXLhISwOgpJZmuMJL6/M3SAHWa0G9kL9wzfxTEfTZAsr2SJY+NZVjYuzUxap71VvWW6SXHfM7kApla4YIEkwNZjlrk4bncjdayimkhbB4W9i9oW1xII92Fv5A3/LRdRbtkRrcLQWYngQBFeu9q2zrawoOuJuBWj/op07p7Cq5f4hWfdyDHEi6F9zhib3SUCGcZVuHgFAZhuPS5HWew75xGIfGAH3KJ7mwWkZpbNduKDwJCqDxymtP4MG77PTNhUO4AHqHqONLXrjoZI/MU7bvK27wrmIdQpz7v1uqBkLF8OuZfDiKDaBERSIuZIYDQ+BFNnEpAOYAHdJigozsRKMyzx48jr99dw9hiDG41VtVgXXXQgbuOprWtfKAOW4VjOTRrCKMbFlAgCKAZ10APWNKQLU/j8CwJYAgHnqJ7RurNYEGDvq4u0S1TJTT9pslln4toP12xSNpCzADeTV21rwBVBuUfrznypiEhUgaqz10PUDLgaJqnPXc1BRbNFVZqKLCivNXM9U5qjnqiRkPGvXFTCgsCGzDlBmORK1LAFWDo3LMO4f7UjhmU65QZ01Y6E8SBrW0Fgxk8mvhQiP3wTOmukeJHZFTZ/cXkdQIPA7hOjes0pg2JuKrIFUwQJJ3cTPOKu25cDMBvABB5Sd4on0Ef9hpvbFExF61dKIlsLkeGIdsoNy2v1OMy9EanNEaV5vC7PxV5blwYgW1v3LjtbuYW27AZiqhs+vyqsA7hWrh3toiImHfIuqAICAZJzKSd8kmd+tRxm3VtDNctuo5s1tfDM+tS5P4hV6YX/AWZcrYp8szlW2qJMyTlDZd/VWqdk4lVyjH3soEAZEgAbhu3UYT2lF3/Cw2IcfVkREjqdnAPdS20MTi7ri0qNYtsrEsrI15gCoIVpyp8w11NFy+hgxdrYrGWri28PjXu3PtKEUZBzdty8ND+E6Fr2fuYlQcZi7tw8UVsqDuIOY9cCn7Fn4cC3bw4UOxmbmrMBJLNBLHrqOFxN4OQLSjfozkeimhybWApfRvY/s7ZwxLWc4JEHM5IPau6dN8VotYVtGWYkgdcax2x5CkLmLvqpYpbAG8m42nb0K7s7a3vUV+jOZoKmVIDRoeOoNT+u2aQp4HcMi6ctAoO4CndvbXGGtpkALuTlJ3QsZmMb96jvrOW5r2GltvstywhPzWnZCOMN0geyFI7qzmrRtGkx3YvtIzsEuwQdJAjfzHKmds4XIZG7eOydR4+teT2VaLOAOdey9ob+XInEqZ8o9DWem2pUaasVViGAuhCWPIx2xWZduZmLHif9hUsTJRgN41HdvHgfKk7V3MAfHt41qzBIYBqQNLlq4DSKGQ1dzUtmruagBjNRS+Y12gCkmjNUM1cqiS+y8Op64PYa0sNhLdyC5yMBllYWQpMSYgsBxJndWKaZw2LZJgAg8xMdY5GrjKiJRvJpvhVTpW5OXUsWBkEwDoOsUjjrm7idaL+0mZcoARdJA4xu7qTZiTJNOUk0CjTs0E2UzohbE3whWciMqbyTBcDNGsRI0FMYTYuGtHMtpc31tLt25mJNZDe0tm2q22aWGmVVZmkdQFVnbt9/8ACw5QfVfOUfyLLHxFNJ0ZS7PVlxS9xv8AnIeGS4PFrf4V5+3dec128zmZCp/y0HcDmb+JiOqmr20IKOdwJWeGonf2qKUlgS7NXaFwZrZ/bP8Aob8Kw8btC47D4e3Gmty7KJv3qnzt26DrNU7U2ygCuW6KsCY1OoI0A376w8R7WMWm3bnk1wwOrorqR3iiCdDfZ6HEbBFzp4q69478pPu7S8ejbT1J1iqTcVMuVQFWAqjQADd+uukdjYm9cV715y0nIigZUA0LkKN/2Vkyd9XXX1inTumXHCs08NedhLHUny4V2/Yza8YIjcOrzqrAHontpyolhlxyinZxa2wYpJB3BtPSnsTfZ3LuZJ8AOQqiaJqFFLo0cm+yStWfiFFtsx+RjqQPkPP9bx1gU/XGAYFWEg7xTJFbiEGD1ERqCDqCDxBGs1wV21FqEuSbJnI6iXtE8I+0nEr3iDIN2IwzJBMMjao6nMrD9lufUYI4gUpKhplFArs0TU2USoqM0UWAvNBNVl6iHmqsRdmqOaoNUc1FiLgaCapL1HPSAbt7awNtGW8yq8w4yEs0gMDKAkiCBJ5RWViNrYH/ACsG9zkWJRD3sxMd1LY+2ubNAk7zGvjS4FdMVg5pds7fxTP8mHw9leBCe8cd79HviqLSt0ld3cMIILQoggjKogKRlG6rXaoAxT+CQziLS+5WFWc8TAmIPHfSgQU47Tbj9v7jXNnWc91EO4uoPZOvlUQ6Ln2b/ugiIn0IJ/ePSbzPlVCimcY0lj10qhqkD8H8Id9OW0BgsYEwOZ7BxrOw2ksd3r1VfiLhX98j+RTuA5Ejy7TUSSWWXHOEan952rZhUzEby0N3DhNP2Xt4kdEKrbuRmvIzVlm6yEMpgj9a86w3ZNdpsY/CPbMMNOB4HvpatfZ+30cZLwGvPcewnd3+NWYvYk9Oy2YfSd9V2LrsxSeBqNtGQHI0K2rIdVaOo6T21K7bZDDKQesVXnpjLBbUx0DPGCRHcZB8RUMVhXtgF4BY9ED6RvM7zwrU2Vhf8x9EXUzx6qxtp473rl503L1AUpUkEcsrmiqcwrlZ2XRSXFcmq3eOFRN4Ab6YmXTSd/FwYUf71DEYzKCTWQcan1jxitoQ+sxnKsI0mxrchUTjjyFIXMQFUOT0TMEEGY6pmlsPj8+bT5dx468/CtNq8M9z9Nl3zKCf1rVJNfQcDs3DNh7LuiSbdvUjeco0HE8asOEwaiRZUzui07T+6csGlyRWB8UpZPmpYc6gjAtvFfSFTDAEiwIBgkWD830wVmd1RRLbs6e7CHKeiyKNCCJESD46UnqxDia7PmuGxRJZSdJrW9n2BxNodZ/0tXP7NmVrl4uAQEU9IAx0t+te7wzoSre5Zc3yMEXXjOhlREnWNKbko4CMHLKMXFWjl76oSyeR8K9XgFVWdSJ1BHaPyNOuyyOgQOwRS3pYKcG8ni3uBAzsJW2uYj6nOiL3kjzrzD464xJLEkkknrO+tb2nulLdtNxuvcuMOpSURT4sfCvIY3EsgBXiYINXVmfRr/Fv9RroxTfUfGsK3tUHep7jpTePv5IA1lQ0kRvHKTRtDcb2AxLSRJrawO17tr5G05HUd3KvJbKvkspP2h61tq9c2p+ZHRp5jTPYWPa0MIu2wfBvWK6+38MNRZ16hp615Gu1O5l7Ua+1dtPeGUAIn0jWf3jpPYABWUG66AAaB2VLdlJUSz0VHMOXlXaVgQLH9LSt09ngKYusOMzWVj7wAyjed/Z+dawVsibpC+Ku5gY3QQI0rzD799b7NWZcwmv6muqNI5ZWy7EtOGt6bncTp1HtqjZX2x1D76ZEm0LZ4MWntAFdw9kLuptiSPUWvbi9ZQW1ey2RVChrTFhAEKWVwp7euor/AGh32XpOitxCWAwGv1NeE+FecbZ4eWLAT1T51D+61A+dT2rP30qj4O5G5a9vMQQc97JroEw9ppHOWcQeqDSuH9sb2di+IuZZ6JS3YDdcyIHDdNZK7NAnpKe0fnUF2d0t6nqg/jRUfAuRfsPapw5dszrnABNsISdZg5wRHZWpZ9tb+Zs9+/l0yZBZVo/a6Ect1YluxJKzHcDu7aut4FZnNqd+g9KePqEt3w+pbA2umJtLdUtKnK4aMwYDe2UAajXQV18a6O4JYgIW1Mgg6bu+vGezl44a7nVsysArpAAZe7iOBr6CbKX7TFHHSWFJ3rO9SO4Vm6Ts0VtHgfa/Fh7yQT0bKaHcM0tK9s8eVeX2mJUdteh9orRDox35MhHJrbMD5MtYtwAiDV9EMxlFa+216SQd9pN+msRVHwwq25LRm1hQB2CjcKi7APlVDyg16RSeflXm0NeiwJLIpAJ0jQTu0rn11izfReaLveOOI8KkLrc6FgbxUw45elc1nTQK7cNfEffXC2uoPn+NWWkLaKo8RTCYV4+UHv8Azo3BQnn6vM0Uz8I/0+Y/GiluChLG7TIBJKgcYiPSvPXsUjMWzieNaO3VPu3EINAeiTzFeTiu3RSqzl1W7o1GvJ9Qqs4hfqFZpFcitqMbNI4hfqrnxC8/I1nRRRQGumOAEfjQccOQ/XdWTNdk0UFs0TixyFRGKEyBrSI7aKKC2NJeAMz5fnVhx36j86RrsUgseTarDcB+u+nsH7R3bbZ0MHiIkHqInWsUAV0RRSHbN3a23/iSoZFTpBnZZMncWjlBOg31k+/6qpooC2Xe+HXUheHI+P5VQtSgUAW+/HI+I/CvSezro6NmDHKRES28HlpwryxAr0vstlyuCs6rrmCkb9x/W6stZfll6T/SNdrtuIyEdfS9DVQCcJ7T+VMnDE6AkDx9N9SXZs77h7gJ8Ca4jrFMo3CD1BTPhFSCONVDD+FhTFzZrDjI7pjuG+qxgo1JYdZcD0M0FEPeP9bf1UV33Y/639T/AIUUAK46yl1XBcISOiejHeqgV569sUKJ98p5AD75ivW+/QSQDy6YQjuJFZdy8CeHciegNaR1JR6M5QjJ5POrssn7S+K+s1z+7G+pe4g/91br3A0BZI5lVme4THVVSKxJj0/Gq5pE8MTHOzjuk7+XGhdmk8T4R61uG0x5E8YKqfCNagLL79B/EJo5pehxR8Mv+6wN5P8AT+NC7NQ/aPhXoLezr53R/Moq9LlxDHRMcC//AOqXNL0fHHwwzsW3Ei7PUF/Gq12Un1N5V6K5imI6VtSP/cJ9DVRv2+Nof/YY9KXLP0fHDwwG2Yv7XpUhsxP2vGfQVru+sqAo5SD61F7pO8AdkAeVLln6HHDwQXZqcj/V+NM2dnWIIYlZj7LEiOTTpv4VZbM6GT1CPvFNYawp+bOOZ0PpRyS9DZHwqtbLwsb2nmSI8JmK6+BwyqdFY8IDeetPZbaaZGed2c5fuqy1hQ3SyacpzD0++p5Jej2R8Me1grbHRJ7EYj/XNPJs+wNDYJ6wrD/U1aazuMjqy5R4xUYO6Z7/AMqN8vRbI+GecLZG/DGOpR5wTTOGa1bByW8s79ImOfjTAsk68KtAgcu3QUOTf0ail8KFxw5T1A/iKmm0h9Ld4U+ppxByj9d1VjNMbxy3Uhi+Je04lj5n0FIt7oaqC0cCfxrVZY6ucVFwY6LBe0tJPX1VJRke8T6D/PXaaz3f2f5m/wDOigDOxJMwpEdRkedKtbjePAj7qcDxz8Krck/T/KfUGix0Li3ppmnsMVwTyJ7j6inbZb6k/qBqZz7jHeW++iwopS6sQFI56kfdU7Cpm6Ugc9/hXI11OnVVgIIgDX6iSPKKLAZZLU6O885P3CqMRaQDouW5jWoJcYcQfA+RFWsWI4fygfdTRLFSJ0E9h3VB1PLwq12j/b8KEJIjKe2W17ppjFJb6akF7R3Vc2cb9O7WolX6zQKhm04XTNPVBHnTtrEoPtZeqC3nFZIVuJI8vOuqOeveRQM1LmOHBvAa1G3tELBYk9x9Zik7dqQTKjqLkH0qdvAM3ykHqzCfOpCh47SQ6jNP7o/Gj4xSN5PYv5UjdwoQgOrg8RK+WlX4dLZ4NP0gBvSgKGFxo3wT1GK4uOTeQxqalBr7h555DHbExV1jF5f8pwOQQfcKLFQlexqyMi9xj8airueDdxEVrjFcrb/xQPQVUzvM5BB/ZJ86aYzOZnQbz3gGlzcIMh4b91fWtd2cfNanwqpscR/kA9g++KGCEP7wu/WfL/xopr+8T/0R/TXKmmMTs2VJ3eZpi7bAUaUUUxCTVLC6uAd07qKKQz0eEw6hZCgHnV6IJmKKKYiK4dW+ZQe0ClNoYVAAQoHZRRSXYGf+FAPZ4CiirRIjbvMJ1NFy6edFFSULXrhK7zUVoooAuWtrZ1kHfPDczD0NcooAbxVsRx8TWet1hMEjvNFFCAY2ffYxJJ7auxrnTWiij6J9C6fNTTXWE6miiqERYSNSTrzNI4m2Nd/ia7RSY0LrbEDf4miiikM//9k=",
  },
  {
    name: "Onoki",
    clan: "",
    gender: "Male",
    rang: "Suchikage",
    vallage: "Rock Village",
    image:
      "https://www.lulu-berlu.com/upload/image/naruto---mattel-action-figure---orochimaru--slash-attack---loose--p-image-481012-moyenne.jpg",
  },
  {
    name: "Choji",
    clan: "Akimichi",
    gender: "Male",
    rang: "lonin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw63bcf59c/images/funko/upload/75534_Naruto_S12_ChojiAkimichi_POP_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Deydara",
    clan: "",
    gender: "Male",
    rang: "Bomber(died)",
    vallage: "Rock Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw9ea28b1e/images/funko/upload/72068-POP-Animation-Naruto---Deidara_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Hinata",
    clan: "Huiga",
    gender: "Female",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw321bcf3e/images/funko/upload/71171_Naruto_HinataHyugaTwinLionFists_POP_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Ino",
    clan: "Yamanako",
    gender: "Female",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwf9bd54a7/images/funko/upload/75528_Naruto_S12_InoYamanaka_POP_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Itachi",
    clan: "Uchiha",
    gender: "Male",
    rang: "Killer(programmer(died))",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw274f055c/images/funko/upload/75554_Naruto_S12_ItachiUchiha_POCKET_POP_KEYCHAIN_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Asuma",
    clan: "Sarutobi",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://ru.myanimeshelf.com/upload/dynamic/2012-01/21/1803.jpg",
  },
  {
    name: "Shikamaru",
    clan: "Nara",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://images.goodsmile.info/cgm/images/product/20190730/8644/62451/large/d9f3cecf86b8b9bc26cb01459275f87d.jpg",
  },
  {
    name: "Iruka",
    clan: "Umino",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://i.ebayimg.com/images/g/SyQAAOSwOBdimM2C/s-l1200.jpg",
  },
  {
    name: "Ten Ten",
    clan: "",
    gender: "Female",
    rang: "Jonin",
    vallage: "Sand Village",
    image:
      "https://i.ebayimg.com/images/g/BZ8AAOSwQChhjDoc/s-l1600.jpg",
  },
  {
    name: "Neji",
    clan: "Huiga",
    gender: "Male",
    rang: "chunin(died)",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw6e0a5828/images/funko/upload/60655a_POPAnimation_Naruto_Neji_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Shisui",
    clan: "Uchiha",
    gender: "Male",
    rang: "chunin(died)",
    vallage: "Leafy Village",
    image:
      "https://i.ebayimg.com/images/g/loIAAOSwi1tkh4Rh/s-l1600.jpg",
  },
  {
    name: "Nagato",
    clan: "Uzumaki",
    gender: "Male",
    rang: "Genin(died)",
    vallage: "Rain Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw3c9f2449/images/funko/upload/NRPP0008_LPP_NARUTO_PAINFRONT.png?sw=800&sh=800",
  },
  {
    name: "Obito",
    clan: "Uchiha",
    gender: "Male",
    rang: "Genin(died)",
    vallage: "Leafy Village",
    image:
      "https://m.media-amazon.com/images/I/61YN8q2ChuL.jpg",
  },
  {
    name: "Hashirama",
    clan: "Senju",
    gender: "Male",
    rang: "Hockage(died)",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw58dab5bd/images/funko/63298-2_C.png?sw=800&sh=800",
  },
  {
    name: "Rock",
    clan: "Li",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://images.goodsmile.info/cgm/images/product/20200305/9331/68159/large/6e21616b667a0b20a86154ce0cc6b529.jpg",
  },
  {
    name: "Sasori",
    clan: "",
    gender: "Male",
    rang: "Kuklovod(died)",
    vallage: "Sand Village",
    image:
      "https://media.entertainmentearth.com/assets/images/14e0ffe5205442ed983c4ac727e095a8xl.jpg",
  },
  {
    name: "Kankuro",
    clan: "",
    gender: "Male",
    rang: "Jonin",
    vallage: "Sand Village",
    image:
      "https://ru.myanimeshelf.com/upload/dynamic/2018-01/30/22_29862163.jpg",
  },
  {
    name: "Kisame",
    clan: "hoshigake",
    gender: "Male",
    rang: "Skark(died)",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwb8bf7235/images/funko/upload/72070-POP-Super-Naruto--Kisame-Hoshigaki_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Kiba",
    clan: "Inuzuka",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw2baf30eb/images/funko/49804-1.png?sw=800&sh=800",
  },
  {
    name: "Mei",
    clan: "Terumi",
    gender: "Female",
    rang: "Mizukage(was)",
    vallage: "Leafy Village",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/5/9/6b3b33df-3235-40d1-9aa4-2e2f9403a9f3.png",
  },
  {
    name: "Suygesu",
    clan: "Hozuki",
    gender: "Male",
    rang: "Water",
    vallage: "Orochimaru lab",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfG0mSVWL5FR-M4HD6hks-dQhaqaOSxS7VQdw8Bx-fzRe1JyOZvfbprk6TjtLo3Q6_fA&usqp=CAU",
  },
  {
    name: "Ibicki",
    clan: "Morino",
    gender: "Male",
    rang: "jonin",
    vallage: "Leafy Village",
    image:
      "https://images.prom.ua/4665713344_w640_h640_figurka-ibiki-morino.jpg",
  },
  {
    name: "Hamura",
    clan: "Otsusuki",
    gender: "Male",
    rang: "Bro",
    vallage: "Bishkek",
    image:
      "https://i.ebayimg.com/images/g/9L0AAOSwqONi602H/s-l1200.webp",
  },
  {
    name: "Izumo",
    clan: "Kamizuki",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw47fbeb9c/images/funko/58010-1.png?sw=800&sh=800",
  },
  {
    name: "Konohomaru",
    clan: "Sarutobi",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://i.ebayimg.com/images/g/zt0AAOSwWK5lGqke/s-l400.jpg",
  },
  {
    name: "Hagoromo",
    clan: "Otsusuki",
    gender: "Male",
    rang: "Мудрец 6",
    vallage: "Village",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBh7e3G1HQIaeHkFjnk73RbsbpAa7fwLHhyQ&usqp=CAU",
  },
  {
    name: "Zabuza",
    clan: "Momochi",
    gender: "Male",
    rang: "Killer(died)",
    vallage: "Tooman Village",
    image:
      "https://m.media-amazon.com/images/I/61O-AxzSuUL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Darui",
    clan: "",
    gender: "Male",
    rang: "jonin",
    vallage: "Rain Village",
    image:
      "https://gk-figure.com/wp-content/uploads/2022/09/4_9e91284c-bf5a-479d-93c5-0bc675fe6e67.jpg",
  },
  {
    name: "Karin",
    clan: "Uzumaki",
    gender: "Female",
    rang: "Genin",
    vallage: "Orochimaru lab",
    image:
      "https://tools.toywiz.com/_images/_webp/_products/lg/narutomonos4karin.webp",
  },
  {
    name: "Sai",
    clan: "",
    gender: "Male",
    rang: "Jonin",
    vallage: "Leafy Village",
    image:
      "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw5ae64578/images/funko/upload/75532_Naruto_S12_Sai_POP_GLAM-WEB.png?sw=800&sh=800",
  },
  {
    name: "Momshiki",
    clan: "Otsusiki",
    gender: "Male",
    rang: "God(died)",
    vallage: "Space",
    image:
      "https://cdn.media.amplience.net/s/hottopic/19512426_hi?$productMainDesktop$&fmt=auto",
  },
  {
    name: "Toneri",
    clan: "Otsusuki",
    gender: "Male",
    rang: "",
    vallage: "Moon",
    image:
      "https://i.ebayimg.com/images/g/xrwAAOSwWNJiU0z2/s-l1600.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const shinobiListElement = document.getElementById("shinobiList");
  const searchInput = document.getElementById("searchInput");
  const searchClanInput = document.getElementById("searchClan");
  const searchRangInput = document.getElementById("searchRang");
  const searchVillageInput = document.getElementById("searchVillage");

  // Отображение всех персонажей при загрузке страницы
  displayShinobi(shinobiWorld);

  // Слушатель события ввода в поле поиска по имени
  searchInput.addEventListener("input", function () {
    filterAndDisplay();
  });

  // Слушатель события ввода в поле поиска по клану
  searchClanInput.addEventListener("input", function () {
    filterAndDisplay();
  });

  // Слушатель события ввода в поле поиска по рангу
  searchRangInput.addEventListener("input", function () {
    filterAndDisplay();
  });

  // Слушатель события ввода в поле поиска по деревне
  searchVillageInput.addEventListener("input", function () {
    filterAndDisplay();
  });

  // Общая функция для фильтрации и отображения
  function filterAndDisplay() {
    const searchTerm = searchInput.value.toLowerCase();
    const searchClan = searchClanInput.value.toLowerCase();
    const searchRang = searchRangInput.value.toLowerCase();
    const searchVillage = searchVillageInput.value.toLowerCase();

    // Фильтруем массив по имени, клану, рангу и деревне
    const filteredShinobi = shinobiWorld.filter(function (shinobi) {
      const nameMatch = shinobi.name.toLowerCase().includes(searchTerm);
      const clanMatch = shinobi.clan.toLowerCase().includes(searchClan);
      const rangMatch = shinobi.rang.toLowerCase().includes(searchRang);
      const villageMatch = shinobi.vallage.toLowerCase().includes(searchVillage);

      return nameMatch && clanMatch && rangMatch && villageMatch;
    });

    // Отображаем отфильтрованных персонажей
    displayShinobi(filteredShinobi);
  }

  // Функция для отображения массива персонажей
  function displayShinobi(shinobiArray) {
    shinobiListElement.innerHTML = "";

    shinobiArray.forEach(function (shinobi) {
      const shinobiContainer = document.createElement("div");
      shinobiContainer.classList.add("shinobi");

      shinobiContainer.innerHTML = `
        <h2>${shinobi.name}</h2>
        <p>Clan: ${shinobi.clan}</p>
        <p>Gender: ${shinobi.gender}</p>
        <p>Rang: ${shinobi.rang}</p>
        <p>Village: ${shinobi.vallage}</p>
        <img src="${shinobi.image}" alt="${shinobi.name}">
      `;

      shinobiListElement.appendChild(shinobiContainer);
    });
  }
});




