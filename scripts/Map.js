
class Map{

    static blankMapGenerate(lado){
        let emptyMap = [];
        
        for(let i = 0; i < lado; i++) {
            emptyMap[i] = [];
            for(let j = 0; j < lado; j++) {
                emptyMap[i][j] = 0;
            }
        }
        
        return emptyMap;
    }

    static showMap(){
        for(let i in mapConfig){
            for(let j in mapConfig[i]){
                mapConfig[i][j]==0?image(parede, j*tlMapSz, i*tlMapSz, tlMapSz, tlMapSz):image(caminho, j*tlMapSz, i*tlMapSz, tlMapSz, tlMapSz);
            }
        }
    }

    static generateMaze(lado) {
        nodeEnd = [];

        if(lado%2 == 0){
            lado++;
        }

        let maze = this.blankMapGenerate(lado);
        const pilha = [[1, 1]];
        maze[1][1] = 1;
        
        const direcoes = [[0, -2], [0, 2], [-2, 0], [2, 0]];
        
        while (pilha.length > 0) {
            const [x, y] = pilha[pilha.length - 1];
            
            // Embaralha direções
            const dirsEmbaralhadas = [...direcoes];
            for (let i = dirsEmbaralhadas.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [dirsEmbaralhadas[i], dirsEmbaralhadas[j]] = 
                [dirsEmbaralhadas[j], dirsEmbaralhadas[i]];
            }
            
            let encontrouVizinho = false;
            
            for (const [dx, dy] of dirsEmbaralhadas) {
                const novoX = x + dx;
                const novoY = y + dy;
                
                if (novoX >= 1 && novoX <= lado - 2 && 
                    novoY >= 1 && novoY <= lado - 2 && 
                    maze[novoX][novoY] === 0) {
                    
                    maze[x + dx/2][y + dy/2] = 1;
                    maze[novoX][novoY] = 1;
                    pilha.push([novoX, novoY]);
                    
                    encontrouVizinho = true;
                    break;
                }
            }
            
            if (!encontrouVizinho) {
                if(this.MTON(x,y,maze,lado)){nodeEnd.push([x, y])};
                pilha.pop();
            }
        }
        
        return maze;
    }

    //More than 1 neighboor
    static MTON(x, y, maze, lado) {
        let directions = [
            [0, -1], [0, 1], [-1, 0], [1, 0]  // Vizinhos adjacentes (1 célula)
        ];
        
        let countNeighboors = 0;
        
        for (const [dx, dy] of directions) {
            const ngbX = x + dx;
            const ngbY = y + dy;
            
            if (ngbX >= 0 && ngbX < lado && 
                ngbY >= 0 && ngbY < lado && 
                maze[ngbX][ngbY] === 1) {
                countNeighboors++;
            }
        }
        
        return countNeighboors == 1;
    }

}

