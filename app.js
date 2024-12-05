//797

var allPathsSourceTarget = function(graph) {
    return allPathsRecursive(graph, 0)
};

function allPathsRecursive(graph, i){
    if( i === graph.length - 1) return [[i]]
    const vertices = graph[i]
    const result = []
    for(let j=0; j < vertices.length; j++){
        const vertex = vertices[j]
        const paths = allPathsRecursive(graph, vertex)
        for(let k=0; k < paths.length; k++){
            const path = paths[k]
            if(path[path.length - 1] === graph.length - 1) result.push([i].concat(path))
        }
    }
    return result
}