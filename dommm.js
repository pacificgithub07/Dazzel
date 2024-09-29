let flag = 0; 

        function changeContent() {
            let a = document.querySelector("p");
            if (flag % 2 == 0) {
                a.innerHTML = "hello";
            } else {
                a.innerHTML = "world";
            }
            flag++; 
        }


let p = document.querySelector('h1');
p.style.color = "red";