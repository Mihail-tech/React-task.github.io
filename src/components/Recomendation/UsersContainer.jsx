import React from 'react'
import { connect } from 'react-redux';
import { follow, 
    setCurrentPage, 
    unfollow,
    toggleFollowingProgress,
    
     } from '../redux/users-reducer';

import Users from './Users'

import Preloader from '../common/Preloader/Preloader';

import { compose } from 'redux';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from './Users-selectors';



class UsersContainer extends React.Component  {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true)

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

        //     this.props.toggleIsFetching(false)    
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true)
        
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)   
        //     this.props.setUsers(data.items)
        
        // });
    }


    render () { 
        return <>
        {this.props.isFetching ? <Preloader /> : null}
            <Users 
                totalUsersCount={this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users= {this.props.users}
                follow= {this.props.follow}
                unfollow= {this.props.unfollow}
                followingInProgress = {this.props.followingInProgress}
            />
        </>
         
    }
}



// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsers (state) ,
        pageSize: getPageSize(state) ,
        totalUsersCount: getTotalUsersCount (state) ,
        currentPage: getCurrentPage (state),
        isFetching: getIsFetching (state),
        followingInProgress: getFollowingInProgress (state)
    }
}




export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer);
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         serUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetchingAc: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

// export default connect(mapStateToProps,  {
//         follow,
//         unfollow,
//         setCurrentPage,
//         toggleFollowingProgress,
//         getUsers
// }
// )(withRedirect) ;


