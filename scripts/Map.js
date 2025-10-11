const tlMapSz = 64;
mapConfig = [];

function blankMapGenerate(lado){
    let emptyMap = [];
    
    for(let i = 0; i < lado; i++) {
        emptyMap[i] = [];
        for(let j = 0; j < lado; j++) {
            emptyMap[i][j] = 0;
        }
    }
    
    return emptyMap;
}

function showMap(){
    for(i in mapConfig){
        for(j in mapConfig[i]){
            mapConfig[i][j]==0?image(parede, j*tlMapSz, i*tlMapSz, tlMapSz, tlMapSz):image(caminho, j*tlMapSz, i*tlMapSz, tlMapSz, tlMapSz);
        }
    }
}


function generateMaze(lado) {
    
    let maze = blankMapGenerate(lado);
    
    function cavar(x, y) {
        maze[x][y] = 1;
        
        const direcoes = [
            {dx: 0, dy: -2},  
            {dx: 0, dy: 2},   
            {dx: -2, dy: 0},  
            {dx: 2, dy: 0}    
        ];
        
        for (let i = direcoes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [direcoes[i], direcoes[j]] = [direcoes[j], direcoes[i]];
        }
        
        for (const {dx, dy} of direcoes) {
            const novoX = x + dx;
            const novoY = y + dy;
            
            if (novoX >= 1 && novoX <= lado - 2 && 
                novoY >= 1 && novoY <= lado - 2 && 
                maze[novoX][novoY] === 0) {        
                maze[x + dx/2][y + dy/2] = 1;
                
                cavar(novoX, novoY);
            }
        }
    }
    cavar(1, 1);
    
    return maze;
}