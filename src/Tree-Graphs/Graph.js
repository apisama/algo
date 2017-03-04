module.exports = Graph;

function Node(id){
	this.id = id;
	this.edges = {};
}

// Node.prototype.isAdj(node){
// 	if(this.edges[node] != undefined){
// 		return true;
// 	}

// 	return false;
// }

function Graph(){
	this._graph = {};
}

Graph.prototype.addNode = function(id){
	if(this._graph[id] != undefined){
		throw "Node " + id + "already exists";
	}

	return this._graph[id] = new Node(id);

}

Graph.prototype.connect = function(nodeA, nodeB){
	if(this._graph[nodeA] == undefined){
		this.addNode(nodeA);
	}

	if(this._graph[nodeB] == undefined){
		this.addNode(nodeB);
	}

	this._graph[nodeA].edges[nodeB] = true;
	this._graph[nodeB].edges[nodeA] = true;
	
}

Graph.prototype.removeNode = function(id){
	var node = this._graph[id]; 
	if(node != undefined){
		for(var adj in node.edges){
			this._graph[adj].edges[id] = undefined;
		}
	}
	this._graph[id] = null; 
}

Graph.prototype.hasPath = function(a, b){
	if(this._graph[a] == undefined || this._graph[b] == undefined){
		throw "Nodes not found";
	}
	return hasPath(this._graph, a, b, {});
};

function hasPath(graph, a, b, visited){
	if(a === b) return true;
	visited[a] = true;
	for(var n in graph[a].edges){
		if(!visited[n]){
			if(hasPath(graph, n, b, visited)){
				return true;
			}
		}
	}

	return false; 
}
