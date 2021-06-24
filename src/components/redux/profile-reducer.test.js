const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");


test('new post should be added', () => {
    //1 даем данные
    let action = addPostActionCreator('some text');
    let initialState = {
        PostsData:[
            {id:1, messange:"hi", like:12},
            {id:2, messange:"hi", like:23}
            ],
    };
    //2 даем action b начальные параметры
    let newState = profileReducer (initialState, action);
    //3 то что мы хотим увидеть
    expect (newState.PostsData.length).toBe(3)
  });
  
  test('after deleting length of messeges should be decrement', () => {
    //1 даем данные
    let action = deletePost (1);
    let initialState = {
        PostsData:[
            {id:1, messange:"hi", like:12},
            {id:2, messange:"hi", like:23}
            ],
    };
    //2 даем action b начальные параметры
    let newState = profileReducer (initialState, action);
    //3 то что мы хотим увидеть
    expect (newState.PostsData.length).toBe(2)
  });
  

