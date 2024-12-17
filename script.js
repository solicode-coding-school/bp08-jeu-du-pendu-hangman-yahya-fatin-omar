 // this part for omar ............................................................
 const hangmanWords = [
    { word: "ocean", hint: "A large body of salt water." },
    { word: "dinosaur", hint: "A prehistoric reptile that no longer exists." },
    { word: "pyramid", hint: "A triangular structure built by ancient Egyptians." },
    { word: "telescope", hint: "A tool used to look at stars and planets." },
    { word: "lightning", hint: "A bright flash in the sky during a storm." },
    { word: "honeybee", hint: "A small insect that makes honey." },
    { word: "compass", hint: "A tool used to find directions." },
    { word: "chocolate", hint: "A sweet treat made from cocoa." },
    { word: "planet", hint: "Orbits a star, like Earth around the Sun." },
    { word: "library", hint: "A place full of books." },
    { word: "guitar", hint: "A musical instrument with strings." },
    { word: "umbrella", hint: "Used to stay dry in the rain." },
    { word: "kangaroo", hint: "An animal that hops and has a pouch." },
    { word: "lighthouse", hint: "Helps guide ships at night with a bright light." },
    { word: "mountain", hint: "A tall, natural landform that rises above its surroundings." },
    { word: "yahya", hint: "the worst programer in the world," }
  ];
  let tries = 0
  let gameTime =  document.querySelector(".miss")
  document.querySelectorAll(".choice button").forEach(btn => {
    btn.addEventListener("click", function(){
      tries = btn.value
      document.querySelector(".test").style.display = 'none'
      
      document.querySelector(".sss").style.display = 'none'
      gameTime.innerHTML = `number of tries left ${count}/${tries}` 


    })
  })
  let count = 0;
 

  
  let score = 1;
  
  let head = document.querySelector(".head")
  let body = document.querySelector(".bodyd")
  let leftArm = document.querySelector(".left")
  let leftLeg = document.querySelector(".left-leg")
  let rightArm = document.querySelector(".right")
  let rightLeg = document.querySelector(".right-leg")
  let fullBody = [head, body, leftArm, rightArm, leftLeg, rightLeg]
  const allButtons= Array.from(document.getElementsByClassName("key"))
  let gamebord= document.querySelector('.geme')
  let hinttext= document.querySelector('.hint')
  let word;
  let moro= []
  let wordarray= []
  //for counting lifes and losing
  function randomWord() {
    const index= Math.floor(Math.random() * hangmanWords.length)
    return hangmanWords[index]
  }
  function startgame() {
    const words= randomWord()
    word = words.word.toUpperCase()
    const hint= words.hint
    const p =document.createElement('p')
    p.classList.add('hintp')
    p.textContent=hint
    hinttext.appendChild(p)
    wordarray = Array.from(word);
    moro = Array(word.length).fill('_');  
    draw();
  }
  function checkwin(moro, word) {
    let joinedWord = moro.join("")
     if(joinedWord === word){
      hinttext.innerHTML= "";
        allButtons.forEach((btn) => {
                btn.disabled = false;
                btn.style.backgroundColor = "black";   
          })
        document.querySelector(".score").innerHTML = `${score}`
        score++
        startgame()
     }
    }
  function draw() {
    gamebord.innerHTML= "";
    moro.forEach(harf => {
        const span= document.createElement('span')
        span.innerHTML= harf
        span.style.backgroundColor = 'rgb(255, 255, 255)';
        span.style.margin = '12px';
        span.style.padding = '15px';
        span.style.borderRadius='5px';
        span.style.fontSize='20px'
        span.classList.add('soop')
        gamebord.appendChild(span)
    })
  }
  document.querySelector(".again").onclick = () =>{
    location.reload()
  } 
  function chicke(harf) {
    harf = harf.toUpperCase()
        if (word.includes(harf)) {
           document.querySelector("#correct").play()
            for (let i = 0; i < word.length; i++) {
                if (word[i] === harf) {
                    moro[i] = harf
                }
            }
              draw()
              checkwin(moro,word)
        } else {
          document.querySelector("#wrong").play()
          
            
            
            //testing code start here
            if (count < tries) {
              if (count <= 4) {
                  fullBody[count].style.display = 'block';  
              }
              count++;
          }
          gameTime.innerHTML = `number of tries left ${count}/${tries}` 
            if(count == tries){
              for(let i = 0;i < fullBody.length;i++){
                fullBody[i].style.display = 'block';
              }
              
              document.querySelector(".leftEye").style.display = "block"
              document.querySelector(".rightEye").style.display = "block"
              gamebord.innerHTML= "";
              hinttext.innerHTML= "";
              moro= []
              wordarray= []
              setTimeout(() => {
                document.querySelector("#losing").play()
              }, 1000);
              setTimeout(() => {
                document.querySelector(".black").style.display = "block"
                document.querySelector(".intro").style.display = "flex"      
              }, 2000);     
          }
        }
  }
  // this part for fatin ..............................................
  allButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const harf = btn.value;
        btn.disabled = true;
        btn.style.backgroundColor = "red";
        chicke(harf)
    })
  })
  startgame()