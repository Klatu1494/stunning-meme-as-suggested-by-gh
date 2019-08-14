/**
 * @template T The nodes type.
 */
class Heap<T> {
    /**
     * The nodes contained in the heap. It is implemented
     * as an Array to easily get the heap size.
     */
    private nodes: Array<T>;
    /**
     * A Function that takes two nodes as parameters
     * and must return a positive number if the first
     * one should be removed before the second one.
     */
    private comparer: (a: T, b: T) => number;

    /**
     * @constructor
     * @param comparer A Function that takes two nodes as
     * parameters and must return a positive number if the
     * first one should be removed before the second one.
     */
    public constructor(comparer: (a: T, b: T) => number) {
        //I fill nodes[0] with null to avoid complex rounding logic
        this.nodes = [null];
        this.comparer = comparer;
    }

    /**
     * Inserts a node into the heap.
     * @param node The node being inserted.
     */
    public insert(node: T): void {
        let position: number = this.nodes.length;
        while (
            1 < position &&
            this.comparer(node, this.nodes[Math.floor(position / 2)]) < 0
        ) {
            this.nodes[position] = this.nodes[Math.floor(position / 2)];
            position = Math.floor(position / 2);
        }
        this.nodes[position] = node;
    }

    removeFirst(): T {
        let returnedNode: T = null;
        let lastIndex: number = this.getSize();
        if (0 < lastIndex) {
            returnedNode = this.nodes[1];
            this.nodes[1] = this.nodes[lastIndex];
            let temp: T = this.nodes[1];
            let i: number = 1;
            let processFinished: boolean = false;
            while (processFinished || 2 * i <= lastIndex) {
                let child: number = 2 * i;
                if (
                    child != lastIndex &&
                    0 < this.comparer(this.nodes[child], this.nodes[child + 1])
                ) {
                    child++;
                }
                if (0 < this.comparer(temp, this.nodes[child])) {
                    this.nodes[i] = this.nodes[child];
                    i = child;
                } else {
                    processFinished = true;
                }
            }
            this.nodes[i] = temp;
            this.nodes.pop();
        }
        return returnedNode;
    }

    public getSize(): number {
        return this.nodes.length - 1;
    }

    public peekFirst(): T {
        return this.nodes[1];
    }
}
