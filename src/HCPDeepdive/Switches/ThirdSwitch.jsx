import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ThirdSwitch = () => {
    const chartRef = useRef(null);
    
      useEffect(() => {
        const data = {
          name: "Zolgensma (n=97)",
          children: [
            { name: "Spinraza", value: "n=3 (3.1%)", color: "#7bb7ed" },
            { name: "Zolgensma", value: "n=9 (9.3%)", color: "#e39d34" },
            { name: "No Switch", value: "n=85 (87.6%)", color: "#9e9e9e" },
          ],
        };
    
        const width = 320;
        const height = 100;
    
        const root = d3.hierarchy(data);
        const treeLayout = d3.tree().size([width, height]);
        treeLayout(root);
    
        const svg = d3
          .select(chartRef.current)
          .append("svg")
          .attr("width", width + 50)
          .attr("height", height + 50)
          .style("font", "10px Arial, sans-serif");
    
        // Add links (dashed lines)
        svg
          .append("g")
          .selectAll("path")
          .data(root.links())
          .join("path")
          .attr("d", d3.linkVertical().x(d => d.x + 25).y(d => d.y + 25))
          .attr("fill", "none")
          .attr("stroke", "#aaa")
          .attr("stroke-dasharray", "4 4")
          .attr("stroke-width", 1);
    
        // Add nodes (rectangles)
        const node = svg
            .append("g")
            .selectAll("g")
            .data(root.descendants())
            .join("g")
            .attr("transform", d => 
                d.depth === 0 ? `translate(${d.x + 20},${d.y + 22})` : `translate(${d.x},${d.y + 22})`
            );
    
        node
          .append("rect")
          .attr("x", d => (d.children ? -60 : -35))
          .attr("y", -15)
          .attr("width", d => (d.children ? 120 : 100))
          .attr("height", 30)
          .attr("fill", d => d.data.color || "#0f90d1")
          .attr("rx", 5)
          .attr("ry", 5);
    
        // Add drug names inside rectangles
        node
          .append("text")
          .attr("dy", "0.35em")
          .attr("x", d => d.children ? 0 : 15) // Adjusted x position for better text centering
          .attr("text-anchor", d => d.children ? "middle" : "middle")
          .text(d => d.data.name)
          .style("font-size", "10px")
          .style("fill", "#fff");
    
        // Add percentage values below rectangles for subnodes
        node
          .filter(d => !d.children)
          .append("text")
          .attr("dy", "2.4em")
          .attr("x", 15) // Adjusted x position to match the drug name centering
          .attr("text-anchor", "middle")
          .text(d => d.data.value)
          .style("font-size", "10px")
          .style("fill", "#333");
    
        return () => {
          d3.select(chartRef.current).select("svg").remove();
        };
      }, []);
  return (
    <div ref={chartRef} className="w-full h-full flex justify-center items-center"></div>
  )
}

export default ThirdSwitch