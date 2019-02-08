import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import data from './Data.json';

//khai bao uuid: tự tăng
//phải khai báo sau khi đã import het thư viện
const uuidv1 = require('uuid/v1');

class App extends Component {

	constructor(props) {
		super(props);
		//
		this.state = {
			hienThiForm: false,
			data: [],
			searchText: "",
			editUserStt: false,
			userEditObject: {},
			//Object lấy từ form EditUser.js
			getInfoObj: {}
		}
	}

	//
	componentWillMount() {
		//kiểm tra có localStorage hay chưa?
		if(localStorage.getItem('userData') === null) {
			localStorage.setItem('userData', JSON.stringify(data));
		}
		else {
			var temp = JSON.parse(localStorage.getItem('userData'));

			this.setState({
				data: temp
			});
		}
	}

	doiTrangThai = () => {
		this.setState({
			hienThiForm: !this.state.hienThiForm
		});
	}

	getTextSearch = (dl) => {
		//.log("du lieu nhan duoc la: "+dl);
		this.setState({
			searchText: dl
		});

	}
	//hàm này sẽ đưa đến component FormLeft.js
	//để lấy thông tin nhập từ form
	//sau đó lưu vao doi tuong item
	//và lưu vào state
	//sau đó đưa vào Data.json thông qua hàm push()
	getNewUserData = (name, tel, permission) => {
		//đóng gói đới tượng
		//khoi tạo bien doi tuong item
		//noi dung được lấy từ FormLeft.js
		var item = {};
		item.id = uuidv1();
		item.name = name;
		item.tel = tel;
		item.permission = permission;

		//khai báo bien lưu biến state của Data.json
		var items = this.state.data;
		//cap nhật lại state của data
		this.setState({
			data: items
		})
		//thêm doi tuong item vào bien json vừa khai báo
		items.push(item);
		//console.log("ket noi thanh cong");
		//
		//console.log("name: "+name+", tel: "+tel+", Permission: "+permission);
		//console.log(items);
		

		//day data vừa them vào localStorage
		localStorage.setItem('userData', JSON.stringify(items));
	}

	//ham lấy thong tin user từ component TableRight.js
	//khi click vào button edit
	//để load vào form EdiUser.js
	editUser = (user) => {
		//console.log("Da ket noi");
		//
		//ssconsole.log(user);


		//cách 01: thay doi editUserStt ngay
		this.setState({
			//thiết lấp object thông tin user lấy từ TableRight.js
			//lưu vào userEditObject
			//khi click vao button Edit
			userEditObject: user,
			editUserStt: !this.state.editUserStt
		})

		//cach02: dùng hàm thay doi editUserStt
		//this.showFormEditUser();
	}

	//hàm lam xuat hien form EditUser.js
	//khi click vao button edit tren TableRight.js
	showFormEditUser = () => {
		this.setState({
			editUserStt: !this.state.editUserStt
		})
	}

	//xay dựng hàm để lấy thông tin nhập từ form EditUser.js
	getInfoFromEditUser = (info) => {
		//console.log("ket noi duoc roi nè");
		//thiet lap65 các thông tin vừa nhập luu vào state 
		this.setState({
			getInfoObj: info
		});
	}

	// hàm cập nhật lại thông tin user
	updateInfo = () => {
		//console.log("thong tin user: "+this.state.getInfoObj.id);
		//duyệt từng phần tử trong Data.json
		this.state.data.forEach((value) => {
			//so sánh, nếu giá trị id trong Data.json = với id trong getInfoObj
			if(value.id === this.state.getInfoObj.id) {
				//thì tiến hành cập nhật lại 3 giá trị còn lại
				//theo id đã so sánh
				value.name = this.state.getInfoObj.name;
				value.tel = this.state.getInfoObj.tel;
				value.permission = this.state.getInfoObj.permission;
			}
		})
		localStorage.setItem('userData', JSON.stringify(this.state.data));	
	}


	deleteUser = (idUser) => {
		//console.log("lay id nè: "+idUser);
		//khai báo biến lưu data ở state
		var tempData = this.state.data;
		var tempData = tempData.filter(value=> value.id !==idUser);

		//cap nhật lại state sau khi đã lọc phần tử
		//có giá trị idUser ra
		this.setState({
			data: tempData
		});
		//đẩy data vào localStorage
		localStorage.setItem('userData', JSON.stringify(tempData));

		}
	

  render() {
  	//console.log(this.state.data);
  	//console.log(this.state.getInfoObj)
  	
  	//
  	//localStorage.setItem("userData", JSON.stringify(data));
  	

  	var ketqua = [];
  	this.state.data.forEach((item) => {
  		if(item.name.indexOf(this.state.searchText) !== -1) {
  			ketqua.push(item);
  		}
  	})

  	//gọi hàm thực hiện update
  	{this.updateInfo()}

    return (
      <div className="">
       	<Header/>
       	<Content hienThiForm={this.state.hienThiForm} 
       		     ketnoi={() => this.doiTrangThai()}
       		     data={ketqua}
       		     data2={ketqua}
       		     getTextSearch={(dl) => this.getTextSearch(dl)}
       		     getNewUserData={(name, tel, permission) => this.getNewUserData(name, tel, permission)}
       		     editUser={(user) => this.editUser(user)}
       		     editUserStt={this.state.editUserStt}
       		     showFormEditUser={() => this.showFormEditUser()}
       		     userEditObject={this.state.userEditObject}
       		     getInfoFromEditUser={(info) => this.getInfoFromEditUser(info)}
       		     deleteUser={(idUser) => this.deleteUser(idUser)}/>
      </div>
    );
  }
}
export default App;
