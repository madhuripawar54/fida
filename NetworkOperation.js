// const url = "http://argentsinfosystems.com/eschool/Api/"
const url = "http://fida.agpltest.com/api/";
// const url = "http://www.argentsinfosystems.com/eschool/Api/";
//import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo'
export const executePostTransaction = async (sub_url, data) => {
  console.log("url:", url + sub_url);
  console.log("body", JSON.stringify(data));
  if (getConnection) {
    return new Promise((resolve, reject) => {
           fetch(url + sub_url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(resp => {
          return resp.json();
        })
        .then(resp => { 
          console.log("REsponse:", resp);
          resolve(resp);
        })
        .catch(err => {
          console.log("error:", err);
          resolve(undefined);
        });
    });
  }
  else{
  console.log("Internet is not connected")

     // Toast.show("No Internet Connection", Toast.SHORT);
}
};

export const executeGetTransaction = async sub_url => {
  console.log("url:", url + sub_url);
  if (getConnection) {
    return new Promise((resolve, reject) => {
      fetch(url + sub_url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "multipart/form-data"
        }
      })
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          console.log("REsponse:", resp);
          resolve(resp);
        })
        .catch(err => {
          console.log("error:", err);
          resolve(err);
        });
    });
  }

else{
  console.log("Internet is not connected")

  //  Toast.show("No Internet Connection", Toast.SHORT);

}
  
};
export const executeFormData = async (sub_url, formData) => {
  if (getConnection) {
    console.log("url:", url + sub_url);
    console.log("formData:", formData);
    return new Promise((resolve, reject) => {
      fetch(url + sub_url, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        },
        body: formData
      })
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          console.log("REsponse:", resp);
          resolve(resp);
        })
        .catch(err => {
          console.log("error:", err);
          resolve(err);
        });
    });
  }

else{
  console.log("Internet is not connected")
  //  Toast.show("No Internet Connection", Toast.SHORT);

}
};
export const getConnection =async () => {
  var flag=false;
  await NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      flag=true;
      // return true;
    } else {
      flag=false
      // return false;
    }
  });
  return flag
};