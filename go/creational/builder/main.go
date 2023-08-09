package main

import (
	"fmt"
	"strings"
)

// before
func withoutBuilder() {
	words := []string{"hello", "world"}

	sb := strings.Builder{}
	sb.WriteString("<ul>")
	for _, v := range words {
		sb.WriteString("<li>")
		sb.WriteString(v)
		sb.WriteString("</li>")
	}
	sb.WriteString("</ul>")

	fmt.Print(sb.String())
}

// after
const (
	indentSize = 2
)

type HtmlElement struct {
	name     string
	text     string
	elements []HtmlElement // HtmlElement can have other HtmlElements inside of them
}

func (e *HtmlElement) String() string {
	return e.string(0)
}

func (e *HtmlElement) string(indent int) string {
	sb := strings.Builder{}
	i := strings.Repeat(" ", indentSize*indent)
	sb.WriteString(fmt.Sprintf("%s<%s>\n",
		i, e.name))
	if len(e.text) > 0 {
		sb.WriteString(strings.Repeat(" ",
			indentSize*(indent+1)))
		sb.WriteString(e.text)
		sb.WriteString("\n")
	}

	for _, el := range e.elements {
		sb.WriteString(el.string(indent + 1))
	}
	sb.WriteString(fmt.Sprintf("%s</%s>\n",
		i, e.name))
	return sb.String()
}

type HtmlBuilder struct {
	rootName string
	root     HtmlElement
}

func NewHtmlBuilder(rootName string) *HtmlBuilder {
	return &HtmlBuilder{
		rootName: rootName,
		root:     HtmlElement{rootName, "", []HtmlElement{}},
	}
}

func (b *HtmlBuilder) String() string {
	return b.root.String()
}

func (b *HtmlBuilder) AddChild(
	childName string,
	childText string,
) *HtmlBuilder {
	e := HtmlElement{childName, childText, []HtmlElement{}}
	b.root.elements = append(b.root.elements, e)

	return b
}

func main() {
	withoutBuilder()

	// with builder
	b := NewHtmlBuilder("ul")
	b.AddChild("li", "hello").
		AddChild("li", "world")
	fmt.Print(b.String())
}

// separar HtmlElement de html builder em arquivos diferentes?
