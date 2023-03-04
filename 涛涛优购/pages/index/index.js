// 引入用来发送请求的方法
import {requst} from '../../request/index'

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		swiperlist:[],
		cateslist:[]
	
	},
	// 获取轮播图数据
	getswiperlist(){
		requst({
			url: 'https://www.fastmock.site/mock/9740f8af05d6c1906b195d9fc03b1c86/tao/tao',
		})
		.then(res=>{
			this.setData({
						 swiperlist: res.data
					 })
		})
		
	},
	// 获取分类导航数据
	getcateslist(){
		requst({
			url: 'https://www.fastmock.site/mock/9740f8af05d6c1906b195d9fc03b1c86/tao/tao3',
		})
		.then(res=>{
			this.setData({
						 cateslist: res.data
					 })
		})
		
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.getswiperlist();
		this.getcateslist();
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})