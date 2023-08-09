import React from 'react';
//import Image from '../pictures/HWPic1.jpg';

function Article() {
  return (

    <div>
    <article>
    <time datetime="2020-11-12">11/12/20</time>
        <h3>On the Street in Brooklyn</h3>
        <img src="./pictures/HWPic1.jpg" alt="Article Image 1"/>
        <p>Cray are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
        <a href="#" class="continue-link">Continue...</a>
      </article>
      <article>
      <time datetime="2020-11-12">11/11/20</time>
        <h3>Vintage in Vogue</h3>
       
        <img src="./pictures/HWPic2.jpg" alt="Article Image 1"/>
        <p>Selfies it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
        </p>
        <a href="#" class="continue-link">Continue...</a>
      </article>
        </div>
  );
}

export default Article;
