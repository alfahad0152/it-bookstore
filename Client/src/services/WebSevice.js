class WebService 
{
    getApiCall(URL)
    {
        return fetch(URL);
    }

    postApiCall(URL,data,token=undefined)
    {
        var options = {
            method : 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }
        if(token!=undefined)
        {
            options = {...options,headers:{...options.headers,'Authorization' :'Bearer '+token }}
        }
        return fetch(URL,options)
    }

    putApiCall(URL,token=undefined)
    {
        var options = {
            method : 'PUT',
            headers : {
                'Content-Type':'application/json'
            }
        }
        if(token!=undefined)
        {
            options = {...options,headers:{...options.headers,'Authorization' :'Bearer '+token }}
        }
        return fetch(URL,options)
    }

    patchApiCall(URL,token=undefined)
    {
        var options = {
            method : 'PATCH',
            headers : {
                'Content-Type':'application/json'
            }
        }
        if(token!=undefined)
        {
            options = {...options,headers:{...options.headers,'Authorization' :'Bearer '+token }}
        }
        return fetch(URL,options)
    }
}
export default new WebService ();

const server = "http://localhost:8080"
export const urls = {
    CUSTOMER_REGISTRATION : `${server}/store/reg/customer`,
    SELLER_REGISTRATION : `${server}/store/reg/seller`,
    LOGIN_USER : `${server}/store/login`,
    CATEGORY_LIST : `${server}/store/list/category`,
    BOOKS_LIST : `${server}/store/list/books`,
    TRANSACTION_LIST : `${server}/store/list/trans_type`,
    CATEGORY_SAVE : `${server}/auth/cate`,
    CATEGORY_UPDATE : `${server}/auth/cate/`,
    CATEGORY_STATUS_CHANGE : `${server}/auth/cate/`,
    BOOK_SAVE : `${server}/auth/book`,
    BOOK_UPDATE : `${server}/auth/book/`,
    BOOK_STATUS_CHANGE : `${server}/auth/book/`,
    BOOK_IMAGE_CHANGE : `${server}/auth/book/changeimage/`
}