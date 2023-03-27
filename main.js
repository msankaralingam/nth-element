var a=[4,9,3,7,8,1,5,0]; n=prompt("Enter the nth element");
			function task(a){
			b=0;
				for(i=0; i<a.length; i++){
					for(j=i+1; j<a.length; j++){
						if(a[i]>a[j]){
							b=a[j];
							a[j]=a[i];
							a[i]=b;
						}
					}
				}
				console.log(a[n-1]);
			}
			tash(a);