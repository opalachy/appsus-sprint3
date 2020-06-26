export default{
    props:['note'],
   template:`
    <div>
        <h1>{{note.info.title}}</h1>
        <iframe width="250" height="300" :src="getUrl()" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    `,
    methods: {
        getUrl() {
            var str = this.note.info.url;
            var res = str.replace('watch?v=', 'embed/');
            return res;
        },
    },
}