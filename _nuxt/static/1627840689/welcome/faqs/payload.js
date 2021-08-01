__NUXT_JSONP__("/welcome/faqs", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:[{document:{slug:"faqs",description:"",title:"FAQs",position:1,category:n,toc:[{id:o,depth:g,text:p},{id:q,depth:g,text:r},{id:s,depth:g,text:t}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"This hasn't been around long enough for anyone to have asked any question frequently enough for it to be considered an FAQ. We will update this page as soon as we have some questions to answer."}]},{type:a,value:c},{type:b,tag:h,props:{id:o},children:[{type:b,tag:f,props:{href:"#should-i-use-this-instead-of-cloud-provider",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"That's really up to you. There are advantages and disadvantages of both solutions and you should pick the one that suits each individual situation. Don't take running your own e-mail platform lightly though, there are many considerations that need to be taken into account to ensure you achieve good deliverability (including correct DNS configuration)."}]},{type:a,value:c},{type:b,tag:h,props:{id:q},children:[{type:b,tag:f,props:{href:"#e-mails-sent-through-postal-are-going-to-spam",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check you've configured your DNS correctly. To start you need reverse DNS for your IPs, you need to configure DKIM & SPF, you need to make sure your rDNS matches the HELO given to the recipient's mail server."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ensure your sending IPs have reverse DNS (PTR) records configured."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check that the IP address you're sending mail from isn't on any blacklists."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check that your actual e-mail doesn't look like spam."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"New IPs sending large volumes of e-mail will likely not deliver well initially."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You can run your message through something like "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.mail-tester.com",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Mail Tester"}]},{type:a,value:" which will give you a good idea of the spammy-ness of your messages and ensure you have everything configured correctly."}]},{type:a,value:c},{type:b,tag:h,props:{id:s},children:[{type:b,tag:f,props:{href:"#can-you-add-mailing-list-feature",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"No. Postal is a mail transport agent and not a mailing list manager. We don't want to add features that a better suited in another application, for example, address books or handling the un-subscription of people from a database."}]}]},dir:"\u002Fen\u002Fwelcome",path:"\u002Fen\u002Fwelcome\u002Ffaqs",extension:".md",createdAt:"2021-08-01T17:57:37.078Z",updatedAt:"2021-08-01T17:57:37.082Z",to:"\u002Fwelcome\u002Ffaqs"},prev:{slug:"index",title:n,to:"\u002F"},next:{slug:"feature-list",title:"Feature List",to:"\u002Fwelcome\u002Ffeature-list"}}],fetch:{},mutations:[]}}("text","element","\n","li","p","a",2,"h2","true",-1,"span","icon","icon-link","Welcome","should-i-use-this-instead-of-cloud-provider","Should I use this instead of [cloud provider]?","e-mails-sent-through-postal-are-going-to-spam","E-Mails sent through Postal are going to spam.","can-you-add-mailing-list-feature","Can you add [mailing list feature]?")));