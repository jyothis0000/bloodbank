let data = {
    A_group: {
      byId: {
        1: {
          id: 1,
          name: 'aaa',
          contact_no: 9497006810,
          pincode:670001
        },
        2: {
          id: 2,
          name: 'bbb',
          contact_no: 9819684504,
          pincode:670002
        },
        3: {
          id: 3,
          name: 'ccc',
          contact_no: 9819686602,
          pincode:670006
        }
      },
      allIds: [
        '1',
        '2',
        '3'
      ]
    },
    B_group: {
      byId: {
        1: {
          id: 1,
          name: 'fff',
          contact_no: 9497406980,
          pincode:670003
        },
        2: {
          id: 2,
          name: 'jjj',
          contact_no: 9819774309,
          pincode:670008
        },
        3: {
          id: 3,
          name: 'ppp',
          contact_no: 8848105734,
          pincode:670009
        }
        }
      },
      allIds: [
        '1',
        '2',
        '3'
      ]
    }
  
  
  
  let A_group = Object.values(data.A_group.byId)
  let B_group = Object.values(data.B_group.byId)
  

    
  
  // console.log(A_group)
  console.log(B_group)