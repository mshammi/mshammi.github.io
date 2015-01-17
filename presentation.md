name: inverse
layout: true
class: center, middle, inverse
---
name: center
layout: true
class: center, middle
---
name: normal
layout: true
class: left
---
name: outline
layout: true
class: inverse, middle
---
template: inverse
# SCALA @ ODATA Framework  
### by [@adilakhter](http://twitter.com/adilakhter) 
<!--slide 1-->
---
template: center
# This Presentation 
# `$$\neq$$` 
# Scala
<!--slide 2-->
---
template: center
# This Presentation 
# `$$\neq$$` 
# Functional Programming
<!--slide 3-->
---
template: center
# This Presentation 
# `$$=$$` 
# Application of Scala in ODATA
# Framework
<!--slide 4-->
---
template: outline
.left-column[
  # Outline
]
.right-column[
.right[
  ## Fast Track To Scala 
  ## Application of Scala in OData 
  ### Actor-based concurrency 
  ### Scala Parser Combinator 
  ### Strategic Term Rewriting
  ## Conclusion  
]
]
<!--slide 5-->
---
template: inverse
# Fast Track to Scala 
<!--slide 6-->
---
template: normal
.left-column[
  ## Expressions
  ### - Defining Expressions
]
.right-column[

It forms the smallest unit of the language.   

.pull-left[
```scala
scala> 10 + 12 * 1
res0: Int = 22
```
]
.pull-right[
```scala
scala> "Hello" + "World" 
res1: String = "Hello World"
```
]
]
<!--slide 7-->
---
layout: normal
.left-column[
  ## Expressions
  ### - Defining Expressions
  ### - Naming Expressions 
]
.right-column[
 
It forms the smallest unit of the language.   

.pull-left[
```scala
scala> 10 + 12 * 1
res0: Int = 22
```
]
.pull-right[
```scala
scala> "Hello" + "World" 
res1: String = "Hello World"
```
]

Using language constructs such as `def`, we can name subexpressions. 

```scala
scala> def pi =  3.141592653589793
pi: Double
scala> def radius = 10
radius: Double
```
In effect, we can refer them subsequently by their names. 

```scala
scala> val res2 = 2 x pi x radius
res2: Double = 62.83185307179586
```
As shown above, Scala offers a construct for value definition, i.e., `val`. 
]
<!--slide 8-->
---
layout: normal
.left-column[
  ## Expressions
  ### - Defining Expressions
  ### - Naming Expressions  
  ### - Questions? 

]
.right-column[

It forms the smallest unit of the language.   

.pull-left[
```scala
scala> 10 + 12 * 1  
res0: Int = 22
```
]
.pull-right[
```scala
scala> "Hello" + "World" 
res1: String = "Hello World"
```
]

Using language constructs such as `def`, we can name subexpressions. 

```scala
scala> def pi =  3.141592653589793
pi: Double
scala> def radius = 10
radius: Double
```

In effect, we can refer them subsequently by their names. 

```scala
scala> val res2 = 2 x pi x radius
res2: Double = 62.83185307179586
```
As shown above, Scala offers a construct for value definition, i.e., `val`. 

.red[What is the fundamental difference between `def` and `val`?]

]

---
layout: normal
.left-column[
  ## Functions
  ### - Defining Functions
]
.right-column[

Function that increments a number:

```scala
def incr(x: Double) = x + 1
```

<br>
Function that squares a number:

```scala
def square(x: Double) = x * x
```
<br>
Functions that computes sum of squares:

```scala
def sumOfSquares(x: Double, y: Double) = 
  square(x) + square(y)
```

<br>
<br>
```scala
scala> sumOfSquares(3, 2 + 2)
unnamed3: Double = 25.0
```


]

---
layout: normal
.left-column[
  ## Functions
  ### - Defining Functions
  ### - Function Application via Rewriting
]
.right-column[

## Example:
Functions that computes sum of squares:

```scala
def sumOfSquares(x: Double, y: Double) = 
  square(x) + square(y)
```

```scala
scala> sumOfSquares(3, 2 + 2)
unnamed3: Double = 25.0
```

## Reduction:
```
sumOfSquares(3, 2+2)
→ sumOfSquares(3, 4)
→ square(3) + square(4)
→ 3 * 3 + square(4)
→ 9 + square(4)
→ 9 + 4 * 4
→ 9 + 16
→ 25
```
]

---
layout: normal
.left-column[
  ## Functions
  ### - Application
]

.right-column[

.blue[Task 1]:  Write a function to sum all integers between a and b:
```scala
def sumInts(a: Int, b: Int): Int =
  if (a > b) 0 else a + sumInts(a + 1, b)
```
<br>

.blue[Task 2]: Write a function to sum the squares of all integers between two given numbers a and b:

```scala
def square(x: Double) = x * x

def sumSquares(a: Int, b: Int): Int =
  if (a > b) 0 else square(a) + sumSquares(a + 1, b)
```
<br>
<br>

]

---
layout: normal
.left-column[
  ## Functions
  ### - Application
]

.right-column[

.blue[Task 1]:  Write a function to sum all integers between `a` and `b`:
```scala
def sumInts(a: Int, b: Int): Int =
  if (a > b) 0 else a + sumInts(a + 1, b)
```
<br>

.blue[Task 2]: Write a function to sum the squares of all integers between two given numbers `a` and `b`:

```scala
def square(x: Double) = x * x

def sumSquares(a: Int, b: Int): Int =
  if (a > b) 0 else square(a) + sumSquares(a + 1, b)
```
<br>
<br>

.blue[Task 3]: Refactor `sumInts` and `sumSquares` to derive a more **generic** solution. 

.red[Question: How can we do that?]

]

---
layout: normal
.left-column[
  ## Functions
  ### - Defining Functions
  ### - Anonymous Functions
]
.right-column[

An expression that evaluates to a function (without a name).

.blue[Example 1]: An anonymous function to compute square:

```scala 
(x: Int) => x * x
```

.blue[Example 2]:  An anonymous function to multiply two numbers:

```scala 
(x: Int, y: Int) => x * y
```
]
---
layout: normal
.left-column[
  ## Functions
  ### - Anonymous Function
  ### - Higher-order Function
]
.right-column[
.blue[Task 3]: Refactor `sumInts` and `sumSquares` to derive a more **generic** solution. 

Observations: 

- The `sumInts` and `sumSquares` functions have  a common pattern. 
- They are all instances of   `\( \sum_{b}^a f(n) \)` for different f(n).

]
---
layout: normal
.left-column[
  ## Functions
  ### - Anonymous Function
  ### - Higher-order Function
]
.right-column[
.blue[Task 3]: Refactor `sumInts` and `sumSquares` to derive a more **generic** solution. 

Observations: 

- The `sumInts` and `sumSquares` functions have  a common pattern. 
- They are all instances of   `\( \sum_{b}^a f(n) \)` for different f(n).

Let's refactor that.

```scala
def sum(f: Int => Int, a: Int, b: Int): Int =
  if (a > b) 0 else f(a) + sum(f, a + 1, b)
```

We can rewrite .blue[sumInts] and .blue[sumSquares] as follows:

```scala
def sumInts(a: Int, b: Int): Int = sum(id, a, b)
def sumSquares(a: Int, b: Int): Int = sum(square, a, b)
```

where -- 

```scala
def id(x: Int): Int = x
def square(x: Int): Int = x * x
```
]
---
layout: normal
.left-column[
  ## Pattern-matching
]
.right-column[
Generalization of C and Java's  `switch` statement to class hierarchy. 

```scala
e match { case p1 => e1 ... case pn => en }
```

It consists of a `match` method. 
- Takes a number of cases as argument. 
- If a particular cases matches with the argument, it gets executed. 

## Example:

Consider following object graph:
```scala
Sum(Number(1), Number(2))
```
We can evaluate it as follows:
```scala
def eval(e: Expr): Int = e match {
  case Number(n) => n
  case Sum(l, r) => eval(l) + eval(r)
}
```
]

---
template: center

# Questions?



---
template: inverse

# Application of Scala @ ODATA 
# Framework

<!--slide 10-->


---
layout: normal
.left-column[
  ## Overview 

]
.right-column[
- .blue[ODATA V4 Framework] is a REST based Web Service Framework. 
- .blue[What it does?] It allow querying, interacting and updating data uniformly.
- A event-driven and data-source parametric framework. 
]
![high-level architecture](img/architecture.jpg)
<!--slide 11-->

---
layout: normal
.left-column[
  ## Overview 
  ### - Concepts

]
.right-column[
A .blue[event-driven] and .blue[data-source parametric] framework `\(\Downarrow\)`

![high-level architecture](img/architecture.jpg)

Among other, the notable concepts that we are utilizing in ODATA V4 Framework: 
- Actor-based Concurrency Model 
- Scala Parser Combinators
- Strategic Term Rewritting 
]

<!--slide 12-->
---
template: inverse
# Actor-based Concurrency
---
template: inverse
# Non-trivial multi-threaded programs are 
# incomprehensible to humans ... 
### - Edward A. Lee, The Problem with Threads 

---
layout: normal
.left-column[
  ## Actor-based Concurrency
  ### - What?
]
.right-column[

A *concurrency abstraction*, first described by .blue[Carl Hewitt] et al. in a 1973 paper; later .blue[Gul Agha] described the Actor model theory in a 1987 book.

Core foundations: 
- Fundamentally, *actors* are objects that never shares states.
- They communicates via .blue[asynchronous] and .blue[immutable] message passing.

]
---
layout: normal
.left-column[
  ## Actor-based Concurrency
  ### - What?
]
.right-column[

##Advantages:
- It allows actors to run .blue[in parallel] even across a cluster.
- Largely avoids the problems of traditional .blue[multithreaded concurrency]. 


Example implementations available in Erlang, Ox, Occam.

]


---
layout: normal
.left-column[
  ## Actor-based Concurrency
  ###- What? 
  ###- How? 
]
.right-column[
<br>
<br>
- Main Building blocks: .blue[Actors] `\(\Leftarrow\)` an abstraction on a synchronous processes.  
- They communicate with the external world by sending and receiving .blue[immutable] messages. 
- They process only .blue[one message] at a time typically in the order they are received.

]
.right[
![mailbox](img\mailbox.png)
]
---
layout: normal
.left-column[
  ## Actor-based Concurrency
  ###- What?  
  ###- How? 
]
.right-column[
<br>
<br>
A simplified view of message processing in Actor-based Concurrency: 
.center[
![Message Processing](img\message-processing.png)
]
]


---
layout: normal
.left-column[
  ## Actor-based Concurrency
  ###- What?  
  ###- How?
  ###- Akka 
]
.right-column[
- Akka is a toolkit and runtime for building highly .blue[concurrent], .blue[distributed], and .blue[resilient] message-driven applications on the JVM.  
- Core components of an akka: 
	- Actors 
	-  Mailbox
	-  Dispatcher
	-  ActorRef

![akka components](img/akka-components.png)
]

---
layout: normal
.left-column[
  ## Actor-based Concurrency
  ###- What?  
  ###- How? 
  ###- Akka
  ###- ODATA
]
.right-column[
- Core Components `\(\equiv\)` Actors.
- See following package `com.tridion.odata.service.actor`.
]
.right[
![OData Actors](img/odataactors.png)
]
---
layout: normal
.left-column[
  ## Actor-based Concurrency
  ###- What?  
  ###- How? 
  ###- Akka
  ###- ODATA
  ###- Example
]
.right-column[
```scala
// 1. It is simply a class
class ODataParserActor extends ODataActor {
  
  def receive = {
    // 2. It only handles ServiceRequest Message 
    case ServiceRequest(actorContext) =>
      val rc = actorContext.requestContext
      // 3. It parses the URI passed at 
      // rc.getRequest().getUri()
      val parsedUri = 
        parser.parseUri(
          rc.getRequest().getUri(), 
          rc.getEntityDataModel())

      // 4. With the result, 
      // it tell other actor(s) to do something. 
      routeMessage(
        actorProducer, 
        context, 
        ParseResult(actorContext, parsedUri))
  }
}
```
]

---
layout: normal
.left-column[
  ## Actor-based Concurrency
  ###- What?  
  ###- How? 
  ###- Akka
  ###- ODATA
  ###- Example
  ###- Actors Flow
]
.right-column[
.right[
![OData Actors](img/odatadesign.png)
]

See [OData V4 Design](https://confluence.sdl.com/display/TCD/OData+v4+Design) for details.
]
---
## More Information

For getting started from here, please refer to the following:

- [OData V4 Design](https://confluence.sdl.com/display/TCD/OData+v4+Design)
- [Getting Started-- Akka Documentation](http://doc.akka.io/docs/akka/snapshot/intro/getting-started.html)
- http://arxiv.org/pdf/1008.1459.pdf 
---
template: center
# Questions?


---
template: inverse
# Scala Parser Combinators

---
template:center
 

## What is a parser?

---
template:center

## `$$parser: input \rightarrow output $$`


---
template:center
 
# Question:
## What is a Parser Combinators?

---
template:center 

## `$$combinator: [Parser] \rightarrow aParser $$`
---
template: normal
## Parser Combinators
- The idea of parser combinators is that you write little parsers for parts of the input that you then combine, so that at the top-level you end up with one parser that can parse the complete input.
- It enables recursive decent parsing. 
- It allows modular definition and integration of parsers. 

## Example 
```scala
import scala.util.parsing.combinator.RegexParsers
 
class MyParsers extends RegexParsers {
  def intParser: Parser[Int] = 
    "[0-9]+".r ^^ { case value => value.toInt }
}
```
---
template: normal
## ODATA URI and Scala Parser Combinators

- `com.tridion.odata.parser` package. 
- Built using the Parser Combinators Library of Scala 2.10. 
- Example:

```remark
"http://somewhere.com/xyz.svc//Customers('xyz')?$format=json"
```
.center[
`\( \Downarrow \)`  
]

```scala
ODataUri(
  "http://somewhere.com/xyz.svc",
  ResourcePathUri(
    EntitySetPath("Customers", Some(
      EntityCollectionPath(None, Some(
        KeyPredicatePath(
          SimpleKeyPredicate(
            StringLiteral("xyz")), 
            None))))),
          List(FormatOption(MediaType.JSON))))
```

---
template: normal
##  Hands-on: $search System Query  Option

- The `$search` system query option restricts the result to include only those entities matching the specified search expression.
- The definition of what it means to match is dependent upon the implementation.
- Typical examples:
	```
	"http://host/service/odata.svc/Products?$search=bike"
	"http://host/service/odata.svc/Products?$search=NOT clothing"
	"http://host/service/odata.svc/Products?$search=blue OR green"
	"http://host/service/odata.svc/Products?$search=mountain AND bike"
	"http://host/service/odata.svc/Products?$search=(mountain OR bike) AND NOT clothing"
	```

### Objective: 

Design a parser for `$search` System Query Option:

`$$searchOp: queryString \rightarrow AST$$`

---
layout: false
.left-column[
  ## Designing Parser
  ### - Top-down idealization
]
.right-column[
## Observation 1: 
We already have a working parser for the URL as follows: 

```
"http://host/service/Products?..."
```
## Observation 2: 

So the problem can be reduced to designing a parser for the following expressions. 

```
+ "$search=bike"
+ "$search=NOT clothing"
+ "$search=mountain AND bike"
+ "$search=(mountain OR bike)"
+ "$search=(mountain OR bike) AND NOT clothing"
```
]

---
layout: normal
.left-column[
  ## Designing Parser
  ### - Top-down idealization  
  ### - Bottom-up realization

]
.right-column[

Therefore, we have to simply design a parser for the following expressions and integrate it with the existing parser combinators.

```
+ "$search=bike"
+ "$search=NOT clothing"
+ "$search=mountain AND bike"
+ "$search=(mountain OR bike)"
+ "$search=(mountain OR bike) AND NOT clothing"
```

Let's identify the parts of each expressions ...

]
---
layout: normal
.left-column[
  ## Designing Parser
  ### - Top-down idealization  
  ### - Bottom-up realization
  ### - Tokens

]
.right-column[


Search expression consists of tokens as highlighted below. 

```operator
+ "$search=bike"
+ "$search=NOT clothing"
+ "$search=mountain AND bike"
+ "$search=(mountain OR bike)"
+ "$search=(mountain OR bike) AND NOT clothing"
```
We can simply define a small parser for parsing the tokens as follows... 
]
---
layout: normal
.left-column[
  ## Designing Parser
  ### - Top-down idealization  
  ### - Bottom-up realization
  ### - Tokens

]
.right-column[
### Define AST :
``` scala
sealed trait SearchTerm extends SearchExpression
case class SimpleToken(value: String) extends SearchTerm
```
### Define a Parser:
```scala
def searchWord: PackratParser[SearchExpression] 
=  ident ^^ SimpleToken
```
### Combinators:

.blue[`^^`] `\( \Rightarrow \)`  .blue[Transform Combinator]. It takes the result of the parser on the left, and transforms it using a partial function that you specify on the right.


As a result, the tokens gets parsed as 
- "bike" `\( \Rightarrow \)` SimpleToken("bike"),
- "mountain" `\( \Rightarrow \)` SimpleToken("mountain"), 
- "clothing" `\( \Rightarrow \)`  SimpleToken("clothing").
]



---
layout: normal
.left-column[
  ## Designing Parser
  ### - Top-down idealization  
  ### - Bottom-up realization
  ### - Tokens
  ### - Expressions

]
.right-column[

### Define AST:

``` scala
sealed trait SearchExpression
case class AndSearchExpression(left: SearchExpression, 
  right: SearchExpression) 
  extends SearchExpression
case class OrSearchExpression(left: SearchExpression, 
  right: SearchExpression) 
  extends SearchExpression
case class NotSearchExp(exp: SearchExpression) 
  extends SearchExpression

```
]
---
layout: normal
.left-column[
  ## Designing Parser
  ### - Top-down idealization  
  ### - Bottom-up realization
  ### - Tokens
  ### - Expressions

]
.right-column[

### Define a Parser:

```scala
lazy val searchPredicate: PackratParser[SearchExpression] = 
    searchPredicate ~ ( AND ~> searchExpr) 
  ^^ {case l ~ r => AndSearchExpression(l, r)} 
  | searchPredicate ~ (OR ~> searchExpr) 
  ^^ { case l ~ r => OrSearchExpression(l, r)} 
  | searchExpr

lazy val searchExpr: PackratParser[SearchExpression] = 
  (NOT ~> searchExpr)^^NotSearchExp 
  | "(" ~> searchPredicate <~ ")"
  | searchWord 
  
```
### Combinators:

* .blue[`~`] `\( \Rightarrow \)`  .blue[Sequential Combinator]. it means "followed by".
* .blue[`~>`] and .blue[`<~`] `\( \Rightarrow \)` variants of the .blue[Sequential Combinator]. They throw away the left or right side; so, the parse result will be only the thing on the right, or the thing on the left of the operator.
* .blue[`|`] `\( \Rightarrow \)`    .blue[Alternation Combinator], it means "or".
]
---
layout: normal

.left-column[
  ## Designing Parser
  ### - Top-down idealization  
  ### - Bottom-up realization
  ### - Tokens
  ### - Expressions
  ### - Main for $search
]
.right-column[

### Define AST: 
```scala
case class SearchOption(
  expression: SearchExpression) 
  extends SystemQueryOption
```

### Define Parser:
```scala
 def search(contextTypeName: String)
 : PackratParser[SearchOption] =
    ("""\$search=\s*""".r ~> searchPredicate ^^ SearchOption)
    .withFailureMessage("exception msg")

```
]
---
layout: normal

.left-column[
  ## Designing Parser
  ### - Top-down idealization  
  ### - Bottom-up realization
  ### - Tokens
  ### - Expressions
  ### - Main for $search
]
.right-column[

### Parse Results:

Test 1:
```scala
$search=bike
```
.center[
`\( \Downarrow \)`
]

```scala
SearchOption(
  SimpleToken("bike"))
  )
```
Test 2:

```scala
$search=NOT clothing
```
.center[
`\( \Downarrow \)`
]


```scala
SearchOption(
  NotSearchExp(SimpleToken("clothing")))
```

]

---
layout: normal

.left-column[
  ## Designing Parser
  ### - Top-down idealization  
  ### - Bottom-up realization
  ### - Tokens
  ### - Expressions
  ### - Main for $search
]
.right-column[
Test  3:


```scala
$search=mountain AND bike
```

.center[
`\( \Downarrow \)`
]

```scala
SearchOption(
  AndSearchExpression(
    SimpleToken("mountain"),
    SimpleToken("bike"))))
```

Test 4:

```scala
$search=(mountain OR bike)
```
.center[
`\( \Downarrow \)`
]

```scala
 SearchOption(
  OrSearchExpression(
    SimpleToken("mountain"),
    SimpleToken("bike"))))
```
]

---
layout: normal

.left-column[
  ## Designing Parser
  ### - Top-down idealization  
  ### - Bottom-up realization
  ### - Tokens
  ### - Expressions
  ### - Main for $search
]
.right-column[

Test 5:


```scala
$search=(mountain OR bike) AND NOT clothing
```
.center[
`\( \Downarrow \)`
]


```scala
SearchOption(
  AndSearchExpression(
    OrSearchExpression(
      SimpleToken("mountain"),
      SimpleToken("bike")),
      NotSearchExp(SimpleToken("clothing"))))
```
]

---

## More Information:

- [Scala Parser Combinator](https://confluence.sdl.com/display/TCD/Scala+parser+combinators)
- [ODATA V4 Parser](https://confluence.sdl.com/display/TCD/OData+v4.0+parser)
- [ODATA Abstract Syntax Tree](https://confluence.sdl.com/display/TCD/OData+Abstract+Syntax+Tree)


---

template: center
# Questions?


---

template: inverse
# Strategic Term Rewriting 



---

template: center
# Motivation

---
template: normal
## The Big Picture

<br>

![Query Processing](img/processing.png) 


---

template: normal
## Query Tree Transformation

We are basically transforming QueryAST of .blue[Capability Model] to that of .blue[Configuration Model] during the .blue[Transformation Phase]. 



<br>

.center[
![Query Processing](img/query-transformation.png) 
]

<br>

`$$ t: \  QueryAST[Capability] \rightarrow  QueryAST [Configuration] $$`
---

template: normal
## Capability Model 

.center[
![capabilty model](img/capabilitymodel.jpg) 
]


---

template: normal
## Configuration Model

.pull-left[
![capabilty model](img/configurationmodel.jpg) 

]

.pull-right[
![DB model](img/dbmodel.jpg) 
]

![webappdb](img/webappdb.jpg)
---
## Transformations 

```scala
"http://localhost:8080/odata.svc/WebApplications('0')/IsPreviewCapable"
```
.center[
`\( \Downarrow\ \)`   `\( t_1: \)` uri `\( \rightarrow\ \)`   QueryAST [Capability]
]

```scala
SelectPropertiesOperation(
  SelectByKeyOperation(SelectOperation("WebApplications",true),
    Map(id -> 0)
  ), List("IsPreviewCapable")
)

```

---
## Transformations 

```scala
SelectPropertiesOperation(
  SelectByKeyOperation(
    SelectOperation("WebApplications",true),
    Map(id -> 0)),List("IsPreviewCapable"))

```
.center[
`\( \Downarrow\ \)`   `\( t_2: \)` QueryAST[Capability] `\( \rightarrow\ \)`   QueryAST [Configuration]
]


```scala
 JoinOperation(
    JoinOperation(
      CriteriaFilterOperation(
        SelectOperation("ConfigurationItems",true),
        CompositeCriteria(AndOperator,
          ComparisonCriteria(EqOperator,PropertyCriteriaValue("Type"),
            LiteralCriteriaValue("com.tridion.odata.datalayer.model.WebApplication")),
          ComparisonCriteria(EqOperator,PropertyCriteriaValue("id"),
            LiteralCriteriaValue("0")))),
        SelectOperation("ConfigurationItems",true),
        "Using",
        JoinSelectLeft,
        true),
      CriteriaFilterOperation(
        SelectOperation("ConfigurationValues",true),
        ComparisonCriteria(EqOperator,PropertyCriteriaValue("Name"),
          LiteralCriteriaValue("IsPreviewCapable"))),
        "Values",
        JoinSelectRight,
        true
      )
```
---
## Transformations 
```scala
 JoinOperation(
    JoinOperation(
      CriteriaFilterOperation(
        SelectOperation("ConfigurationItems",true),
        CompositeCriteria(AndOperator,
          ComparisonCriteria(EqOperator,PropertyCriteriaValue("Type"),
            LiteralCriteriaValue("com.tridion.odata.datalayer.model.WebApplication")),
          ComparisonCriteria(EqOperator,PropertyCriteriaValue("id"),
            LiteralCriteriaValue("0")))),
        SelectOperation("ConfigurationItems",true),
        "Using", JoinSelectLeft, true),
      CriteriaFilterOperation(
        SelectOperation("ConfigurationValues",true),
        ComparisonCriteria(EqOperator,PropertyCriteriaValue("Name"),
          LiteralCriteriaValue("IsPreviewCapable"))),
        "Values", JoinSelectRight, true
      )
```
.center[
`\( \Downarrow\ \)`   `\( t_3: \)` QueryAST `\( \rightarrow\ \)`   JPQL
]

```sql
SELECT DISTINCT e3 FROM CONFIGURATION_ITEM e1 LEFT JOIN e1.using e2 
LEFT JOIN e1.values e3 WHERE (((e1.type = :value1) AND (e1.id = :value2))) 
AND ((e3.name = :value3)), 
params={
  value3 = 'IsPreviewCapable', 
  value1 = 'com.tridion.odata.datalayer.model.WebApplication', 
  value2='0'}
```



---


template: center
# Transformation with Rewriting
## Capability URI `\( \rightarrow \ t_1 \oplus t_2 \oplus t_3 \rightarrow \)` Config QL


---
template: inverse
## A strategy is a generic data-processing action which can traverse into heterogeneous data structures while mixing uniform and type-specific behavior. 
### Lammel, Visser and Visser, The Essence of Strategic Programming




---
template: normal

## Rule: Local Transformation

![rule](img/rule.png)

## Strategy: Application of Transformation

![all](img/all.png)


---
template: normal
## Rules 

```scala 
lazy val rewriteSelect = rule[QueryOperation]{
    case SelectOperation(e, _) if e !=  ComplexTypeName =>  
      filterOn(from(ComplexTypeName))(typeOf(javaType(e)))
    case SelectByKeyOperation(CriteriaFilterOperation(s, criteria),idMappings) => 
      filterOn(s)(buildKeyCriteria(idMappings, criteria))
}

```

## Strategy 

```scala 
lazy val traverseTreeAndRewrite = alltd(rewriteTree)
def rewriteTree: Strategy =
    rewriteJoin             <+
    rewriteSelectProperties <+
    rewriteSelect           <+
    rewriteSelectByKey      <+
    rewriteSubTree          <+
    rewriteFilter          

```

See .blue[`CapabilityQueryRewritter.scala`] at `odata_tridion_extension`
---

## More Information:

- [Kiama](https://code.google.com/p/kiama/)
- [Capability Configuration Repository](https://confluence.sdl.com/display/TCD/Capability+Configuration+Repository)


---

template: center
# Questions?

---
template: inverse	

# That's all folks (for now)!
### Any question?
![](img\scala-icon.png)
![](img\akka.png)
