class UT{
    static Auto_Test(x){
        // this.Test_tk_Path(x);
        // this.Test_tk_Text(x);
        // this.Test_tk_Script(x);
        //this.Test_tk_video(x);

        //this.Test_xhr_load_img(x);
        //this.Test_xhr_load_video(x);
        //this.Test_tk_Animation(x);

        //this.Test_of_001(x);
    }

    //单独测试矢量图对象
    static Test_tk_Path(x){
        console.info("开始执行-显示对象-路径部件测试");
        console.profile("tk_path_001");
        let p1 = new $tk_path({styleType:'fill',style:'blue',points:[[0,20],[-10,-15],[10,-15]],pos:[30,0]});
        let p2 = new $tk_path({styleType:'both',style:{fillStyle:"red",strokeStylest:"yellow 2"} ,points:[[0,-20],[-10,15],[10,15],-1],pos:[-30,0]});
        let s1 = new ShowObj(300,500);
        s1.add(p1);
        s1.add(p2);
        x.add(s1);

        setInterval(()=>{s1.angle+=0.01;if(s1.angle>=2*π)s1.angle-=2*π;},32);
        console.profileEnd("tk_path_001");
    }

    //单独测试-文本对象
    static Test_tk_Text(x){
        console.info("开始执行-显示对象-文本部件测试");
        console.profile("tk_text_001");
        let f1 = new $tk_font({text:'ABCDEFG',styleType:'stroke',style:'green 3',font:'80px serif',pos:[0,80]});
        let f2 = new $tk_font({text:'HELLOW WORD',style:'orange',font:'50px serif',pos:[0,-80]});
        let s1 = new ShowObj(500,500);
        s1.add(f1);
        s1.add(f2);
        
        x.add(s1);

        setInterval(()=>{s1.angle+=0.01;if(s1.angle<0)s1.angle+=2*π;},32);
        console.profileEnd("tk_text_001");
    }

    //单独测试-精灵图
    static Test_tk_Script(x){
        console.info("开始执行-显示对象-精灵图部件测试");
        console.profile("tk_script_001");
        let img = new Image();

        img.src = "https://img.alicdn.com/tps/i2/TB1bNE7LFXXXXaOXFXXwFSA1XXX-292-116.png"
        //img.src="res/x1.gif"
        img.onload = e => {
            let i1 = new $tk_sprite({img:img,update:function(){this.angle +=0.01;}});
            let s1 = new ShowObj(500,300);
            i1.scale(1.25);
            s1.add(i1);
            x.add(s1);

            //setInterval(()=>{s1.angle+=0.01;if(s1.angle<0)s1.angle+=2*π;},32);
        }

        console.profileEnd("tk_script_001");
    }

    //单独测试-异步加载图片信息
    static Test_xhr_load_img(x){
        LoadResources({url:"res/t.jpg",type:"image",
            success:(img)=>{
                document.getElementById("view_port").appendChild(img);
            }
        });
    }
    
    //单独测试-视频部件
    static Test_tk_video(x){
        console.info("开始执行-显示对象-视频部件测试");
        console.profile("Test_tk_video_001");
        let dom = document.getElementById("view_port");
        let v = document.createElement("video");
        v.setAttribute("loop","true");
        // v.setAttribute("width","320");
        // v.setAttribute("height","240");
        v.src = "http://iandevlin.github.io/mdn/video-player-with-captions/video/sintel-short.mp4";//http://www.w3school.com.cn/example/html5/mov_bbb.mp4";
        v.load();

        v.volume = 0;
        window.v = v;

        v.play();
        setTimeout(f=>{
            //let i1 = new $tk_video({img:v,area:{x:-50,y:-50,width:100,height:100},sarea:{x:100,y:20,width:100,height:100}});
            let i1 = new $tk_video({video:v,update:function(){this.angle+=0.01;}});
            let s1 = new ShowObj(400,200);
            i1.scale(0.75);
            s1.add(i1);
            x.add(s1);
            //setInterval(()=>{s1.angle+=0.01;if(s1.angle<0)s1.angle+=2*π;},32);
            v.play();
        },1800);

        console.profileEnd("Test_tk_video_001");
    }

    //单独测试-异步加载图片信息
    static Test_xhr_load_video(x){
        LoadResources({url:"res/320x240.ogg",type:"video",
            success:(video)=>{
                document.getElementById("view_port").appendChild(video);
            }
        });
    }

    //单独测试-精灵图
    static Test_tk_Animation(x){
        console.info("开始执行-显示对象-精灵图部件测试");
        console.profile("tk_Animation_001");
        let img = new Image();

        img.src = "res/h1.jpg"
        img.onload = e => {
            //let i1 = new $tk_animation({img:img,fps:16,frame:8,farea:{width:img.width/4,height:img.height/4},update:function(){this.angle+=0.01;}});
            //let i1 = new $tk_animation({img:img,fps:4,frame:20,farea:{width:img.width/5,height:img.width/5-11},update:function(){}});
            let i1 = new $tk_animation({img:img,fps:8,frame:8,farea:{width:img.width/4,height:img.height/2},update:function(){}});
            let s1 = new ShowObj(550,350);
            i1.scale(1.25);
            s1.add(i1);
            x.add(s1);
            //s1.updateHandler = function(){this.angle+=0.01;}

            //setInterval(()=>{s1.angle+=0.01;if(s1.angle<0)s1.angle+=2*π;},32);
        }

        console.profileEnd("tk_Animation_001");
    }

    //测试对象工厂
    static Test_of_001(x){
        let ef = x.ResManager.ObjectFactory.create("@s1&npc_0001")
        ef.AddIn({x:200,y:300})
        x.add(ef)
    }
}

(function(){
    ;
})();