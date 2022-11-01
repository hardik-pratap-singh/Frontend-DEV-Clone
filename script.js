let in1 = document.getElementById("in1");
      in1.style.width = "250px";
      //   let a = in1.style.width ;
      let func1 = () => {
        if (in1.style.width == "250px") {
          in1.style.width = "450px";
          in1.style.border = "1.5px solid blue ";
          in1.style.borderRadius = "12px ";
        } else {
          in1.style.width = "250px";
          in1.style.border = "1px solid black ";
          in1.style.borderRadius = "2px";
        }
      };