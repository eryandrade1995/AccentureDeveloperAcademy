import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing: border-box;
    padding:0;
    margin: 0;
}
body{
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #d1d1d1;
}

.card{
    width: 900px;
    height: auto;
    background-color: #e0dfe9;
}
.card-header{
    background-color: #350241;
}
.card-header h5{
    color: whitesmoke;
    font-size: 30px;
    font-weight: bold;
}
.centered{
    display: flex;
    justify-content: center;
    align-items: center;
}
.pokeItem{
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100px;
    /* margin-bottom: 50px;   */
    /* background-color: red; */
}
.pokeNameContainer{
    background-color:rgb(24, 206, 24);
    width: 200px;
    height: 50px;
}
.pokeNameContainer p{
    text-transform: uppercase;
    font-weight: 900;
    color: rgb(51, 51, 21);
}
.viewImageContainer{
    background-color:rgb(230, 149, 56);
    width: 200px;
    height: 50px;

}
.viewImageContainer p{
    font-weight: 900;
    color: rgb(11, 14, 194);
    text-transform: uppercase;
 

}


.cardDetailsHeader h6{
    background-color: rgb(59, 1, 1);
    font-size: 30px;
}
.cardDetailsHeader h6{
    color: whitesmoke;
    font-size: 20px;
}


 .pokeContainer{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 20px;
   
} 

a{
    text-decoration: none;
}
.cardDetails{
    width: 200px;
    height: auto;
     background-color: #3a0c44; 
}

.detailContent{
    
    display: flex;
    flex-direction: column;
    border: 5px solid beige;
}
.detailContent h5{
    background-color: #071e2e;
    width: 200px;
    font-size: 25px;
    text-transform:uppercase;
    color: whitesmoke;
    font-weight: bold;
    padding: 5px 0;
    
}`
