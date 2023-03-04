<template>
	<div class="layout">
		<!-- 容器 -->
		<el-container class="container">
			<!-- 侧边栏 -->
			<el-aside class="aside">
				<div class="head">
					<div>
						<img
							class="logo"
							src="https://ecmb.bdimg.com/tam-ogel/-1505185836_-469006313_88_88.png" />
						<span>后台管理系统</span>
					</div>
				</div>
				<!-- 分割线 -->
				<div class="line"></div>
				<!-- 菜单导航1 -->
				<el-menu
					:router="true"
					text-color="#000"
					background-color="#cee8ff"
					:default-openeds="state.defaultOpen"
					:default-active="state.currentPath">
					<el-menu-item index="/home">
						<el-icon><House /></el-icon>
						<template #title>
							<span>首页</span>
						</template>
					</el-menu-item>
					<el-sub-menu index="1">
						<template #title>
							<el-icon><Expand /></el-icon>
							<span>多级菜单1</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/">
								<el-icon><Notebook /></el-icon>
								<template #title>系统介绍</template>
							</el-menu-item>
							<el-menu-item index="/11">二级菜单11</el-menu-item>
							<el-menu-item index="/12">二级菜单12</el-menu-item>
							<el-sub-menu index="/13">
								<template #title>二级菜单13</template>
								<el-menu-item index="111">三级菜单111</el-menu-item>
							</el-sub-menu>
						</el-menu-item-group>
						
					</el-sub-menu>
				</el-menu>
				<!-- 菜单导航2 -->
				<el-menu
					background-color="#cee8ff"
					text-color="#000"
					:router="true"
					:default-openeds="state.defaultOpen"
					:default-active="state.currentPath">
					<el-sub-menu index="2">
						<template #title>
							<el-icon><Expand /></el-icon>
							<span>多级菜单2</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/21">二级菜单21</el-menu-item>
							<el-menu-item index="/22">二级菜单22</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
				</el-menu>
			</el-aside>
			<!-- 内容 -->
			<el-container class="content">
				<div class="main">
					<router-view />
				</div>
			</el-container>
		</el-container>
	</div>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const state = reactive({
	defaultOpen: ["1", "2"],
	currentPath: "/",
});
</script>
<style>
@import "./assets/styles.css";
</style>
