const Practice = (props) => {
   console.log('props in practice', props);
   let {item: [a,b],add: [c,d],children} = props
   console.log('itemObj a', a);
   console.log('itemObj b', b);
   console.log('addObj c', c);
   console.log('addObj d', d);
   console.log('children', children);
   return(<></>)
}
export default Practice