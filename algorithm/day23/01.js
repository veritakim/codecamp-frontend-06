// 폰켓몬
function solution(nums) {
  let result = []
  
   nums.map((el) => {
       if(!result.includes(el)) {
           result.push(el)
       }
   })
   
   return result.length > nums.length / 2 ? nums.length / 2 : result.length
   
}

function solution2 (nums) {
  const answer = new Set([])
  for (let i = 0; i < nums.length; i++) {
      if(answer.size < (nums.length / 2)) {
          answer.add(nums[i])
      }
  }
   
   return answer.size
}

function solution3 (nums) {
  const answer = new Set([])
   
  nums.forEach(monster => {
      if ( answer.size < (nums.length / 2)) {
          answer.add(monster)
      }
  })
   
   return answer.size
}

function solution4 (nums) {
  // 내가 최대한 가질 수 있는 폰켓몬의 종류의 수
  const answer = new Set(nums).size
  // 내가 최대한 갖고갈 수 있는 폰켓몬의 수
  const limit = nums.length / 2
  
  
  return answer > limit ? limit : answer
}