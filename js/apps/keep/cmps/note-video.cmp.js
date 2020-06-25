export default{
    props:['info'],
   template:`
    <li>
    <iframe width="250" height="300" :src="getUrl()" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </li>
    `,
    methods: {
        getUrl() {
            var str = this.info.url;
            var res = str.replace('watch?v=', 'embed/');
            console.log('res is',res);
            return res;
        }
    }

}