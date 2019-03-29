/**
 * 这题暂时放弃，我没有看明白解法中很多细节。我写的这一版也有问题
 */

function InversePairs(data)
{
    if (!data || !data.length) {
        return 0;
    }
    return iversePairsCore(data, 0, data.length) % 1000000007;
}

function iversePairsCore(data, start, end) {
    if (start >= end) {
        return 0;
    }
    const length = Math.floor((end - start) / 2);
    let left = iversePairsCore(data, start, start + length);
    let right = iversePairsCore(data, start + length + 1, end);
    let j = end;
    let i = start + length;
    let count = 0; 
    
    while (i >= start && j >= start + length + 1) {
        if (data[i] > data[j]) {
            count += (j - start - length);
            i--;
        } else {
            j--;
        }
    }
    const arr = (data.slice(start, end)).sort();
    for (let i = start; i < end; i++) {
        data[i] = arr[i];
    }
    return left + right + count;
    
}

console.log(InversePairs([1,2,3,4,5,6,7,0]));
