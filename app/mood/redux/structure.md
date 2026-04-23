(Write) -> Dispatcher -> (Action) -> Reducer -> (Store)
(Read) <- Selector <- (Store)

 [Action -> Reducer -> (Store)]
    /                     \
Dispatcher              Selector
   /                        \  
(Write)                    (Read)
 
     Store
       /\
      / Reducer
     /     \
    /     (Action)
   /          \
Selector     Dispatcher
