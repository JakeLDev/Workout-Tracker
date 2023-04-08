import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {runApp(const MyApp());}
class MyApp extends StatelessWidget {
	const MyApp({Key? key}) : super(key: key);
	Future<http.Response> buttonPressed() async {
		http.Response returnedResult = await http.get(
			Uri.parse('http://localhost:8000/app/hellodjango'),
			headers: <String, String>{
				'Content-Type': 'application/json; charset=UTF-8',
			});
			print(returnedResult.body);
			return returnedResult;
	}

	@override
	Widget build(BuildContext context) {
		return MaterialApp(
			title: "Workout Tracker",
			theme: ThemeData(
				primarySwatch: Colors.cyan,
			),
			home: Scaffold(
				appBar: AppBar(
					centerTitle: true, title: const Text("Workout Tracker")),
				body: Center(
					child: Column(
						children: [
							const Padding(
								padding: EdgeInsets.all(0.0),
								child: Text('Welcome to Workout Tracker!')),
							Padding(
								padding: const EdgeInsets.all(0.0),
								child: ElevatedButton(
									onPressed: buttonPressed,
									child: const Text('Click!')),
								)
							]
							))));
	}
}