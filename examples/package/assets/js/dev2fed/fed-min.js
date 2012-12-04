/**
 * @fileoverview Fed类
 * @desc 《JS高级技巧》模块示范
 * @author fool2fish<fool2fish@gmail.com>
 */

// 模块定义
KISSY.add('dev2fed/fed',function(S){
    
    /**
     * step1 声明类
     * 
     * @param {String} name 姓名
     */
    function Fed(name){
        // step1.1 参数处理
        // name = name || defaultConfig.name;
        
        // step1.2 属性赋值
        this.name = name;
        this.skill = 'JavaScript';
        
        // step1.3 初始化操作
        // this.init();
    }
    
    // step2 原型继承
    // S.extend(Fed, Employee);

    // step3 原型混入
    S.augment(Fed, S.EventTarget, {
        write:function(){
            alert(this.name + ' write JavaScript.');
        },
        toString:function(){
            return 'name=' + this.name + ';skill=' + this.skill;
        }
        // _privateMethod:function(){}
    })
    
    // step4 默认配置（如果有的话）
    // var defautConfig = {...}
    
    // step5 导出类
    return Fed;
    
},{
    requires:[] // 指定模块依赖（如果有的话）
});